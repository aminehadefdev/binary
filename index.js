"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertedBinaryToDecima_1 = require("./lib/ConvertedBinaryToDecima");
const ConvertedDecimalToBinary_1 = require("./lib/ConvertedDecimalToBinary");
const converter = {
    ConvertedBinaryToDecimal(str) {
        var cbtd = new ConvertedBinaryToDecima_1.default(str);
        return cbtd.convert();
    },
    ConvertedDecimalToBinary(decimal) {
        var cdtb = new ConvertedDecimalToBinary_1.default(decimal);
        return cdtb.convert();
    }
};
exports.default = converter;
