import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03PTUqCYRiF4b3cU88qlCKhpBom31BqELSHcJQ/mSZoKpT9aKJY5BLawzd3A25BHjmDd3bds3OqVbb1e0SJTOEHxLXdQJzYzcStxG3Ejf2I+J85Ooiy/ZS4izi1e4hbu4+o2APEuT1M/IK4sEeIS3uceJL4A3FlzxMvEUV7lZxfI2r2D+LI/kUc23+IM3uDuDt4t3xF5FPHW0THMY3oOd4jnh2xLx85PiPGjq+IiWMWMXfEj3zh+EYUyLI94ih8lccBAAA=', 'base64'))));
