'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by SamMFFL on 2017/6/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Img2Base64 = function () {
    function Img2Base64(props) {
        _classCallCheck(this, Img2Base64);
    }

    _createClass(Img2Base64, [{
        key: 'toBase64',
        value: function toBase64(imgPath) {
            var base64Str = 'data:image/jpeg;base64,';
            if (!imgPath) {
                base64Str = '';
            } else {
                var bitmap = _fs2.default.readFileSync(file);
                base64Str += new Buffer(bitmap).toString('base64');
            }
            return base64Str;
        }
    }]);

    return Img2Base64;
}();

exports.default = Img2Base64;
