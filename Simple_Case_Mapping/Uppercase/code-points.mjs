import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H/0IAEQhORunSmMuTUEdCj7t+0t1r79rYl20C5yfaEoD6SCZeKgXkARMwpxYQGMfUz4nlg4uCsthMR8Iu4ZXDc0HttdiIfwJxli3jmBQDhXK6apAfeIxqV6jiuZ1G6abW6+HC3no3hBFeXPut14ulpqz04BL4xq4aSdjRn4A0ahOszId6uSoXpoo+x/W4/pfh9Rfou1N3ONwDcq1h9awFJB3fAGiHOm3SgdefG2lR/gXfteTi8CuCXkJ/sSG/L0aYcRaGA17pYqoJ6A11fNPE7pwJ+rf5b+YhBFh+uyCzDa6RD+AO4+zp49hWhdNWdn0Q2rA2whV4wwzWD5/0HKHo7EhoW8t+lsWjvesivYe/VcWJ5rP/rP1sP/kd0jv+j+fJg==', 'base64')).toString());
