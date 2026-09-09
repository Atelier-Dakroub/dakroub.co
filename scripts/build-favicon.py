"""Build a real BMP-format .ico. Safari does not reliably read a PNG wrapped in
an ICO container, which is what every "just rename it" recipe produces."""
import struct, zlib, sys

def png_rgba(path):
    d = open(path, 'rb').read()
    assert d[:8] == b'\x89PNG\r\n\x1a\n', 'not a png'
    i, idat, ihdr = 8, b'', None
    while i < len(d):
        ln = struct.unpack('>I', d[i:i+4])[0]
        typ = d[i+4:i+8]
        body = d[i+8:i+8+ln]
        if typ == b'IHDR': ihdr = struct.unpack('>IIBBBBB', body)
        elif typ == b'IDAT': idat += body
        elif typ == b'IEND': break
        i += 12 + ln
    w, h, depth, color, comp, filt, inter = ihdr
    assert depth == 8 and color in (2, 6) and inter == 0, (depth, color, inter)
    ch = 4 if color == 6 else 3
    raw = zlib.decompress(idat)
    out, prev, pos = [], bytearray(w * ch), 0
    for _ in range(h):
        f = raw[pos]; pos += 1
        line = bytearray(raw[pos:pos + w * ch]); pos += w * ch
        for x in range(len(line)):
            a = line[x - ch] if x >= ch else 0
            b = prev[x]
            c = prev[x - ch] if x >= ch else 0
            if f == 1: line[x] = (line[x] + a) & 255
            elif f == 2: line[x] = (line[x] + b) & 255
            elif f == 3: line[x] = (line[x] + (a + b) // 2) & 255
            elif f == 4:
                p = a + b - c
                pa, pb, pc = abs(p-a), abs(p-b), abs(p-c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[x] = (line[x] + pr) & 255
        prev = line
        if ch == 3:
            out.append(bytes(b for px in range(w) for b in (*line[px*3:px*3+3], 255)))
        else:
            out.append(bytes(line))
    return w, h, out  # rows top-down, RGBA

def dib(w, h, rows):
    hdr = struct.pack('<IiiHHIIiiII', 40, w, h * 2, 1, 32, 0, 0, 0, 0, 0, 0)
    xor = b''.join(
        bytes(v for px in range(w) for v in (r[px*4+2], r[px*4+1], r[px*4+0], r[px*4+3]))
        for r in reversed(rows)
    )
    stride = ((w + 31) // 32) * 4
    mask = b''
    for r in reversed(rows):
        bits = bytearray(stride)
        for px in range(w):
            if r[px*4+3] < 128: bits[px // 8] |= 0x80 >> (px % 8)
        mask += bytes(bits)
    return hdr + xor + mask

imgs = [png_rgba(p) for p in sys.argv[1:-1]]
blobs = [dib(w, h, rows) for w, h, rows in imgs]
out = struct.pack('<HHH', 0, 1, len(blobs))
offset = 6 + 16 * len(blobs)
for (w, h, _), b in zip(imgs, blobs):
    out += struct.pack('<BBBBHHII', w % 256, h % 256, 0, 0, 1, 32, len(b), offset)
    offset += len(b)
out += b''.join(blobs)
open(sys.argv[-1], 'wb').write(out)
print(f'  {sys.argv[-1]}: {len(blobs)} sizes {[i[0] for i in imgs]}, {len(out)} bytes')
