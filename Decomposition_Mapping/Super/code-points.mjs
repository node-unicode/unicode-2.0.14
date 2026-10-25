import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H/UAAEQBPc+r0tmk0gRC2E5/o2E35BQ6TzboroFZWcBB3mgXSp5afBxb2NVr2E+I/STHoSJ27fcDn8ZM5lhAbJWQP9f61CeEs33HqE/zii5pX3bL/6MHGZNYvTQu8/GyxVm8cnK3R1IO+xm9ymVpvObFz9vgv18Q//OPzc3lW87F/4cHp9LjxYkdBf/vbdIm270tPw5WXlQ=', 'base64')).toString());
