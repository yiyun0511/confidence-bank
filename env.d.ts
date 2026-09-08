declare module '*.html?raw'{const content:string;export default content;}
declare namespace Cloudflare{interface Env{DB:D1Database;FILES:R2Bucket;}}
