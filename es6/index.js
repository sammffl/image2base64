/**
 * Created by SamMFFL on 2017/6/27.
 */

import fs from 'fs';
import path from 'path';

export default class Img2Base64 {
    constructor(props) {}

    toBase64(imgPath) {
        let base64Str = 'data:image/jpeg;base64,';
        if (!imgPath) {
            base64Str = '';
        } else {
            let bitmap = fs.readFileSync(file);
            base64Str += new Buffer(bitmap).toString('base64');
        }
        return base64Str;
    }
}