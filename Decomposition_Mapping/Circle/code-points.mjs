import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('Hw4EIGSaW+PkHWGOgt1fCX4l8Ejnq9fXz5JQ0h1Sd2yjy6i1gc7m8gPHIU5vOEkiH1nyUoCbBBy31PxDaf6ImaAGbcOuKb5poRmxLtIzI/mftphLAL9R+ektvpzE7/EkIFxQnIwNDeWEL8MHCqI1p14HJqHXjskTAqwN+9aKPbnXgp2ncWLT4esuJGJjUiIOLY2SBmBfORxC4NzW6uDL7u7A+TriuuOP6TjJHY3oLkeqy9Dx0Fd31ee/8/cyfNhK9D/wwidn3i4UxWnKUypSI7V6APQlyXvVBUgH7rjjsiyPH+FN8N/KO7Br6jq+bl4tocNBChC2Yo879FaaDrovx/cq2FXyfwAnfBb90STfYk2FgY7mVFGQkRAR4OFgDcTyBQYKGNgu+PDgAm/as2XdPmx1', 'base64')).toString());
