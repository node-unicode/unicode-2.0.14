module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))