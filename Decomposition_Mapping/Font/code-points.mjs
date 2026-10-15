import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE02PyxHAIAhEG+Iginxq2bH/NjIYTLy9N8PCArjMRlBbi5KdwG2UBMH6y9ou5ot7BqRkEHrMEiFYbdJ5sRJMiy3TXpLniq0TvBWPi4XgXDwJXjVML7afXQhRWfefoxO0SsT4/4+ZhepAKEGj2Ah2wln0DczWCMw7oNLzBM+mR4PA4l4aOStxhoO39qN9axwde1U7Klu/bPac/GV1qxw1goy11gPGKTTH3wEAAA==', 'base64'))));
