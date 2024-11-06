module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))