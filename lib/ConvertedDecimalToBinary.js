"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConvertedDecimalToBinary {
    constructor(decimal) {
        this.binary = "";
        this.decimal = decimal;
        this.arByts = [1];
        this.addByts();
    }
    convert() {
        if (this.decimal !== 0 && this.decimal !== 1) {
            let i = 0;
            let result = 0;
            while (result <= this.decimal) {
                if (i === this.arByts.length) {
                    break;
                }
                if (result + this.arByts[i] > this.decimal) {
                    this.binary += "0";
                }
                else {
                    this.binary += "1";
                    result += this.arByts[i];
                }
                i++;
            }
            return {
                decimal: this.decimal,
                NBbyts: this.NBbyts,
                arrByts: this.arByts,
                binary: this.binary
            };
        }
        else {
            if (this.decimal === 1) {
                this.binary = "1";
            }
            else {
                this.binary = "0";
            }
            return {
                decimal: this.decimal,
                NBbyts: 1,
                arrByts: [1],
                binary: this.binary
            };
        }
    }
    addByts() {
        if (this.decimal !== 0 && this.decimal !== 1) {
            let i = 0;
            while (this.arByts[i] <= this.decimal) {
                if (this.arByts[i] + this.arByts[i] <= this.decimal) {
                    this.arByts.push(this.arByts[i] + this.arByts[i]);
                }
                else {
                    break;
                }
                i++;
            }
            this.arByts.reverse();
            this.NBbyts = this.arByts.length;
        }
    }
}
exports.default = ConvertedDecimalToBinary;
