import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H40JAIzEOCbyn0G0eqhILK1++VdZHVxnMvnQwRX0do/4+cvp+zeH3ZWGJ9QkaFNAY2ygKbA2JRbmHmtUVmBl4fLdxe93IQ5vjEbJ2x8c6F4PeYJVZc/gBILlXAiE0KYgdLU6hx9rP8b5yENwGzbPK6KBIc5jzkyj8Z2Pzl1PMC779/CQ5XPVxVn8E8N5UP2MGOxDBNUnfG9zCJHMx+ehh8HlQjGlJnioruSaezPRt2PzfVJ2hjcKEs6HdaBjOg/K/G4GCkIQHkPqBC2Ixz+N+8MZpfFbjdul4b/L71YHZTC/dZFbM/QIQytce7p69BjMU5IRdx7C/qlG0pIfYdDBHP7B8mCuhUPEmdVMas+GYo7DAtEJrcEjhhk/+3fVhVVJr9Dc8PhRAw==', 'base64')).toString());
