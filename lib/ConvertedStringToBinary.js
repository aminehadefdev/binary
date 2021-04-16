"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertedDecimalToBinary_1 = require("./ConvertedDecimalToBinary");
class ConvertedStringToBinary {
    constructor(str) {
        this.str = str;
    }
    convert() {
        var arrReturn = [];
        var ascii;
        var conv;
        for (let i = 0; i < this.str.length; i++) {
            ascii = this.str.charCodeAt(i);
            var cdtb = new ConvertedDecimalToBinary_1.default(ascii);
            conv = cdtb.convert();
            arrReturn.push({
                "char": [this.str[i]],
                "ascii": ascii,
                "binary": conv
            });
        }
        return arrReturn;
    }
}
exports.default = ConvertedStringToBinary;
