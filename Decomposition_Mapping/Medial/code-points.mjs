import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HysCKORQr3GqNIalf/MlT8HTs83MffzAE42QkumSWVppy5U3PdmcE0WMZsfeLW/Y3p7+cWCIo+eCTHZ6amTQs+DO8/QH4FydK/hTblYSHzeiRXFtQBaXJ3zK6/GMyNf4gkL4+QtCStMNQTHNekTPDbDzMxyuV7gAmd/hdKiIBQ0bSGdiiGbJv4ITau9O+89XpnGEGucNy9cvGxdElWYBT6g0KsZkYa53ltcHsXdYjLlkzzXT7/ZsADB3QJYBHJb4RLPc6fxVjODM0/vPGcMxEQUdC3Ycuf8UfLEk8DnNeFJ3HQ==', 'base64')).toString());
