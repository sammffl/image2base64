/**
 * Created by SamMFFL on 2017/6/27.
 */

var fs =require('fs');
var path = require('path');
// import fs from 'fs';

// console.log(fs);
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

var myPath = path.resolve(__dirname, './images/share-icon.jpg');

console.log(__dirname);

console.log(myPath);

console.log(base64_encode(myPath));

// data:image/jpeg;base64,