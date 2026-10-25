import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H+YIAERBOc934JlmGahihM9zOf23li/dolvg/E5wNEEC7uXRHiCBUcxlgWaXLVtnHxkyFeU0OLUPhF3Qs4baBdur1yH8BGPMc1MwKAQKhWRVcJ+4DkvbKKF23YBp5aKCwkie2gC1TG/vqpcmU5sdAy6BU+Dg15LHJLsQ36/w4wK/rfCOwrGGgvdqPU7/CiR8iYY7eonAVcmW71qPpQDpyOxFe9O39YRdICvB79mVv1ejuVsLIxQMwZRQiUFrSuufJrTg9mx/l38uBiPG6NFFqQ20iI4Pdx5kTx/DqCWe+mTP9zh9HnIoyQcowZKZvRYqnD42JHSsRWcl1O6WldDYoHNPYU/z2T8rD/unvEJi3fl8mg==', 'base64')).toString());
