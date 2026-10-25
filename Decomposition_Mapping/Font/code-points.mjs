import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H8cAIBSh0gfnxXqwjroTHP96VU/XwrJl8gzpOWvBhni182tR6UCBovGNOAYRqT2ICIEgopJBBFHrn11H1NBBDTG4nV4CbLO32XJszVpoWDTUAyw1fGSbm0B2viVU37Mfx1BvjXKusQQ=', 'base64')).toString());
