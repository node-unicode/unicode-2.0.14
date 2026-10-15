import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE0WRyZHFMAhEE+LAIrZYKOefxhQC/bm4XjcthHAVOUKlfx8UeUApDiaU0sVQqJODBkV0bYuAIjzDCWU0nNi+DVPn12coExmWZh0+UHamZ2rnc7jv4uu7WPdf9u4fwz0D6XB2/k7vB6HMbj4ED9SJ5X4hL/cTZZgQSs8yQakuM5TaskCpL3fPd1ahwnm70h112aEOLgfUeX6PSlM4gW2B+0rqL1iC2zp8nQkQz4IzLZ4mKMZdSWu+9f+8QDHzrLv1mfovr30eSZ62qefTDiWIyE/Hzeuvf9587nnHnS+f7vk4WJ/m1jK/qrXc+Xv93x+VYyNvkAIAAA==', 'base64'))));
