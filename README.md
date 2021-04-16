binarysuperconvert

binarysuperconvert is a JavaScript library to convert a binary to decimal or a decimal to binary.

## Installation

```bash
npm i binarysuperconvert
```

## Usage

### javascript

```javascript
var binarysuperconvert = require("binarysuperconvert").default
console.log(binarysuperconvert.ConvertedBinaryToDecimal('101010'))// output Object {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
console.log(binarysuperconvert.ConvertedDecimalToBinary(42))// output Object {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
console.log(binarysuperconvert.ConvertedStringToBinary("any string"))/*output Array [
  {
    char: [ 'a' ],
    ascii: 97,
    binary: { decimal: 97, NBbyts: 7, arrByts: [Array], binary: '1100001' }
  },
  {
    char: [ 'n' ],
    ascii: 110,
    binary: { decimal: 110, NBbyts: 7, arrByts: [Array], binary: '1101110' }
  },
  {
    char: [ 'y' ],
    ascii: 121,
    binary: { decimal: 121, NBbyts: 7, arrByts: [Array], binary: '1111001' }
  },
  {
    char: [ ' ' ],
    ascii: 32,
    binary: { decimal: 32, NBbyts: 6, arrByts: [Array], binary: '100000' }
  },
  {
    char: [ 's' ],
    ascii: 115,
    binary: { decimal: 115, NBbyts: 7, arrByts: [Array], binary: '1110011' }
  },
  {
    char: [ 't' ],
    ascii: 116,
    binary: { decimal: 116, NBbyts: 7, arrByts: [Array], binary: '1110100' }
  },
  {
    char: [ 'r' ],
    ascii: 114,
    binary: { decimal: 114, NBbyts: 7, arrByts: [Array], binary: '1110010' }
  },
  {
    char: [ 'i' ],
    ascii: 105,
    binary: { decimal: 105, NBbyts: 7, arrByts: [Array], binary: '1101001' }
  },
  {
    char: [ 'n' ],
    ascii: 110,
    binary: { decimal: 110, NBbyts: 7, arrByts: [Array], binary: '1101110' }
  },
  {
    char: [ 'g' ],
    ascii: 103,
    binary: { decimal: 103, NBbyts: 7, arrByts: [Array], binary: '1100111' }
  }
]*/
```

### CLI
#### Installation CLI global
if you need to install the binarysuperconvert cli in global
```bash
npm i -g binarysuperconvert
```
```bash
binary --version // output: version 1.0.9
binary --help //
binary -cdtb 42 //  output:  {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
binary -cbtd 101010 //  output:  {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
binary  -cstb \"any string\" // output: [
  {
    char: [ 'a' ],
    ascii: 97,
    binary: { decimal: 97, NBbyts: 7, arrByts: [Array], binary: '1100001' }
  },
  {
    char: [ 'n' ],
    ascii: 110,
    binary: { decimal: 110, NBbyts: 7, arrByts: [Array], binary: '1101110' }
  },
  {
    char: [ 'y' ],
    ascii: 121,
    binary: { decimal: 121, NBbyts: 7, arrByts: [Array], binary: '1111001' }
  },
  {
    char: [ ' ' ],
    ascii: 32,
    binary: { decimal: 32, NBbyts: 6, arrByts: [Array], binary: '100000' }
  },
  {
    char: [ 's' ],
    ascii: 115,
    binary: { decimal: 115, NBbyts: 7, arrByts: [Array], binary: '1110011' }
  },
  {
    char: [ 't' ],
    ascii: 116,
    binary: { decimal: 116, NBbyts: 7, arrByts: [Array], binary: '1110100' }
  },
  {
    char: [ 'r' ],
    ascii: 114,
    binary: { decimal: 114, NBbyts: 7, arrByts: [Array], binary: '1110010' }
  },
  {
    char: [ 'i' ],
    ascii: 105,
    binary: { decimal: 105, NBbyts: 7, arrByts: [Array], binary: '1101001' }
  },
  {
    char: [ 'n' ],
    ascii: 110,
    binary: { decimal: 110, NBbyts: 7, arrByts: [Array], binary: '1101110' }
  },
  {
    char: [ 'g' ],
    ascii: 103,
    binary: { decimal: 103, NBbyts: 7, arrByts: [Array], binary: '1100111' }
  }
]
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Copyright (C) <2021> Amine HADEF du droit d'auteur

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.