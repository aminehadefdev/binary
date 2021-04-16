"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertedBinaryToDecima_1 = require("./lib/ConvertedBinaryToDecima");
const ConvertedStringToBinary_1 = require("./lib/ConvertedStringToBinary");
const ConvertedDecimalToBinary_1 = require("./lib/ConvertedDecimalToBinary");
const converter = {
    ConvertedBinaryToDecimal(str) {
        var cbtd = new ConvertedBinaryToDecima_1.default(str);
        return cbtd.convert();
    },
    ConvertedDecimalToBinary(decimal) {
        var cdtb = new ConvertedDecimalToBinary_1.default(decimal);
        return cdtb.convert();
    },
    ConvertedStringToBinary(str) {
        var cstb = new ConvertedStringToBinary_1.default(str);
        return cstb.convert();
    }
};
exports.default = converter;
