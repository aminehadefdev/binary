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
binarysuperconvert.ConvertedBinaryToDecimal('101010')// return Object {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
binarysuperconvert.ConvertedDecimalToBinary(42)// return Object {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
```

### CLI
#### Installation CLI global
if you need to install the binarysuperconvert cli in global
```bash
npm i -g binarysuperconvert
```
```bash
binary --version // output: version 1.0.9
binary -cdtb 42 //  output:  {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
binary -cbtd 101010 //  output:  {decimal: 42, NBbyts: 6, arrByts: [32, 16, 8, 4, 2, 1], binary: "101010"}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.