const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./read.txt','utf8');
const writeStream = fs.createWriteStream('read_copy.txt.gz');
readStream.pipe(gzip).pipe(writeStream);