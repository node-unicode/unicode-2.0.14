# Unicode v2.0.14 data

JavaScript-compatible Unicode data for use in Node.js. Included: arrays of code points, arrays of symbols, and regular expressions for Unicode v2.0.14’s categories, scripts, blocks, and properties, as well as bidi mirroring and case folding data.

The data files in this module are generated as part of the [node-unicode-data](http://mths.be/node-unicode-data) project. Please report any bugs or requests [in the appropriate issue tracker](https://github.com/mathiasbynens/node-unicode-data/issues).

## Installation

```bash
npm install unicode-2.0.14 --save
```

## Regular expressions

The Unicode data modules ship with pre-compiled regular expressions for categories, scripts, blocks, and properties. But maybe you want to create a single regular expression that combines several categories, scripts, etc. In that case, [***you should use Regenerate***](http://mths.be/regenerate). For example, to construct a regex that matches all symbols in the Arabic and Greek scripts as per Unicode v6.3.0:

```js
var regenerate = require('regenerate');
var set = regenerate()
  .add(require('unicode-6.3.0/scripts/Arabic/code-points')) // or `…/symbols`, doesn’t matter
  .add(require('unicode-6.3.0/scripts/Greek/code-points')); // or `…/symbols`, doesn’t matter
console.log(set.toString());
// Then you might want to use a template like this to write the result to a file, along with any regex flags you might need:
// var regex = /<%= set.toString() %>/gim;
```

## Usage

```js
// Get an array of code points in a given Unicode category:
var codePoints = require('unicode-2.0.14/categories/Lu/code-points');
// Get an array of symbols (strings) in a given Unicode category:
var symbols = require('unicode-2.0.14/categories/Lu/symbols');
// Get a regular expression that matches any symbol in a given Unicode category:
var regex = require('unicode-2.0.14/categories/Lu/regex');
// Get the canonical category a given code point belongs to:
// (Note: U+0041 is LATIN CAPITAL LETTER A)
var category = require('unicode-2.0.14/categories')[ 0x41 ];
// Get an array of all code points with the `Bidi_ON` bidi property:
var on = require('unicode-2.0.14/bidi/ON/code-points');
// Get the directionality of a given code point:
var directionality = require('unicode-2.0.14/bidi')[ 0x41 ];

// …you get the idea.
```

Other than categories, data on Unicode properties, blocks, and scripts is available too (for recent versions of the Unicode standard). Here’s the full list of the available data for v2.0.14:

```js
// properties:

require('unicode-2.0.14/properties/Any/code-points');
require('unicode-2.0.14/properties/Any/symbols');
require('unicode-2.0.14/properties/Any/regex');

require('unicode-2.0.14/properties/Assigned/code-points');
require('unicode-2.0.14/properties/Assigned/symbols');
require('unicode-2.0.14/properties/Assigned/regex');

require('unicode-2.0.14/properties/ASCII/code-points');
require('unicode-2.0.14/properties/ASCII/symbols');
require('unicode-2.0.14/properties/ASCII/regex');

// categories:

require('unicode-2.0.14/categories')[ codePoint ]; // lookup array

require('unicode-2.0.14/categories/Cc/code-points');
require('unicode-2.0.14/categories/Cc/symbols');
require('unicode-2.0.14/categories/Cc/regex');

require('unicode-2.0.14/categories/C/code-points');
require('unicode-2.0.14/categories/C/symbols');
require('unicode-2.0.14/categories/C/regex');

require('unicode-2.0.14/categories/Zs/code-points');
require('unicode-2.0.14/categories/Zs/symbols');
require('unicode-2.0.14/categories/Zs/regex');

require('unicode-2.0.14/categories/Z/code-points');
require('unicode-2.0.14/categories/Z/symbols');
require('unicode-2.0.14/categories/Z/regex');

require('unicode-2.0.14/categories/Po/code-points');
require('unicode-2.0.14/categories/Po/symbols');
require('unicode-2.0.14/categories/Po/regex');

require('unicode-2.0.14/categories/P/code-points');
require('unicode-2.0.14/categories/P/symbols');
require('unicode-2.0.14/categories/P/regex');

require('unicode-2.0.14/categories/Sc/code-points');
require('unicode-2.0.14/categories/Sc/symbols');
require('unicode-2.0.14/categories/Sc/regex');

require('unicode-2.0.14/categories/S/code-points');
require('unicode-2.0.14/categories/S/symbols');
require('unicode-2.0.14/categories/S/regex');

require('unicode-2.0.14/categories/Ps/code-points');
require('unicode-2.0.14/categories/Ps/symbols');
require('unicode-2.0.14/categories/Ps/regex');

require('unicode-2.0.14/categories/Pe/code-points');
require('unicode-2.0.14/categories/Pe/symbols');
require('unicode-2.0.14/categories/Pe/regex');

require('unicode-2.0.14/categories/Sm/code-points');
require('unicode-2.0.14/categories/Sm/symbols');
require('unicode-2.0.14/categories/Sm/regex');

require('unicode-2.0.14/categories/Pd/code-points');
require('unicode-2.0.14/categories/Pd/symbols');
require('unicode-2.0.14/categories/Pd/regex');

require('unicode-2.0.14/categories/Nd/code-points');
require('unicode-2.0.14/categories/Nd/symbols');
require('unicode-2.0.14/categories/Nd/regex');

require('unicode-2.0.14/categories/N/code-points');
require('unicode-2.0.14/categories/N/symbols');
require('unicode-2.0.14/categories/N/regex');

require('unicode-2.0.14/categories/Lu/code-points');
require('unicode-2.0.14/categories/Lu/symbols');
require('unicode-2.0.14/categories/Lu/regex');

require('unicode-2.0.14/categories/L/code-points');
require('unicode-2.0.14/categories/L/symbols');
require('unicode-2.0.14/categories/L/regex');

require('unicode-2.0.14/categories/LC/code-points');
require('unicode-2.0.14/categories/LC/symbols');
require('unicode-2.0.14/categories/LC/regex');

require('unicode-2.0.14/categories/Sk/code-points');
require('unicode-2.0.14/categories/Sk/symbols');
require('unicode-2.0.14/categories/Sk/regex');

require('unicode-2.0.14/categories/Pc/code-points');
require('unicode-2.0.14/categories/Pc/symbols');
require('unicode-2.0.14/categories/Pc/regex');

require('unicode-2.0.14/categories/Ll/code-points');
require('unicode-2.0.14/categories/Ll/symbols');
require('unicode-2.0.14/categories/Ll/regex');

require('unicode-2.0.14/categories/So/code-points');
require('unicode-2.0.14/categories/So/symbols');
require('unicode-2.0.14/categories/So/regex');

require('unicode-2.0.14/categories/No/code-points');
require('unicode-2.0.14/categories/No/symbols');
require('unicode-2.0.14/categories/No/regex');

require('unicode-2.0.14/categories/Lo/code-points');
require('unicode-2.0.14/categories/Lo/symbols');
require('unicode-2.0.14/categories/Lo/regex');

require('unicode-2.0.14/categories/Lt/code-points');
require('unicode-2.0.14/categories/Lt/symbols');
require('unicode-2.0.14/categories/Lt/regex');

require('unicode-2.0.14/categories/Cn/code-points');
require('unicode-2.0.14/categories/Cn/symbols');
require('unicode-2.0.14/categories/Cn/regex');

require('unicode-2.0.14/categories/Lm/code-points');
require('unicode-2.0.14/categories/Lm/symbols');
require('unicode-2.0.14/categories/Lm/regex');

require('unicode-2.0.14/categories/Mn/code-points');
require('unicode-2.0.14/categories/Mn/symbols');
require('unicode-2.0.14/categories/Mn/regex');

require('unicode-2.0.14/categories/M/code-points');
require('unicode-2.0.14/categories/M/symbols');
require('unicode-2.0.14/categories/M/regex');

require('unicode-2.0.14/categories/Me/code-points');
require('unicode-2.0.14/categories/Me/symbols');
require('unicode-2.0.14/categories/Me/regex');

require('unicode-2.0.14/categories/Mc/code-points');
require('unicode-2.0.14/categories/Mc/symbols');
require('unicode-2.0.14/categories/Mc/regex');

require('unicode-2.0.14/categories/Cf/code-points');
require('unicode-2.0.14/categories/Cf/symbols');
require('unicode-2.0.14/categories/Cf/regex');

require('unicode-2.0.14/categories/Zl/code-points');
require('unicode-2.0.14/categories/Zl/symbols');
require('unicode-2.0.14/categories/Zl/regex');

require('unicode-2.0.14/categories/Zp/code-points');
require('unicode-2.0.14/categories/Zp/symbols');
require('unicode-2.0.14/categories/Zp/regex');

require('unicode-2.0.14/categories/Nl/code-points');
require('unicode-2.0.14/categories/Nl/symbols');
require('unicode-2.0.14/categories/Nl/regex');

require('unicode-2.0.14/categories/Cs/code-points');
require('unicode-2.0.14/categories/Cs/symbols');
require('unicode-2.0.14/categories/Cs/regex');

require('unicode-2.0.14/categories/Co/code-points');
require('unicode-2.0.14/categories/Co/symbols');
require('unicode-2.0.14/categories/Co/regex');

// bidi:

require('unicode-2.0.14/bidi')[ codePoint ]; // lookup array

require('unicode-2.0.14/bidi/ON/code-points');
require('unicode-2.0.14/bidi/ON/symbols');
require('unicode-2.0.14/bidi/ON/regex');

require('unicode-2.0.14/bidi/S/code-points');
require('unicode-2.0.14/bidi/S/symbols');
require('unicode-2.0.14/bidi/S/regex');

require('unicode-2.0.14/bidi/WS/code-points');
require('unicode-2.0.14/bidi/WS/symbols');
require('unicode-2.0.14/bidi/WS/regex');

require('unicode-2.0.14/bidi/ET/code-points');
require('unicode-2.0.14/bidi/ET/symbols');
require('unicode-2.0.14/bidi/ET/regex');

require('unicode-2.0.14/bidi/L/code-points');
require('unicode-2.0.14/bidi/L/symbols');
require('unicode-2.0.14/bidi/L/regex');

require('unicode-2.0.14/bidi/CS/code-points');
require('unicode-2.0.14/bidi/CS/symbols');
require('unicode-2.0.14/bidi/CS/regex');

require('unicode-2.0.14/bidi/ES/code-points');
require('unicode-2.0.14/bidi/ES/symbols');
require('unicode-2.0.14/bidi/ES/regex');

require('unicode-2.0.14/bidi/EN/code-points');
require('unicode-2.0.14/bidi/EN/symbols');
require('unicode-2.0.14/bidi/EN/regex');

require('unicode-2.0.14/bidi/R/code-points');
require('unicode-2.0.14/bidi/R/symbols');
require('unicode-2.0.14/bidi/R/regex');

require('unicode-2.0.14/bidi/AN/code-points');
require('unicode-2.0.14/bidi/AN/symbols');
require('unicode-2.0.14/bidi/AN/regex');

require('unicode-2.0.14/bidi/B/code-points');
require('unicode-2.0.14/bidi/B/symbols');
require('unicode-2.0.14/bidi/B/regex');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This module is available under the [MIT](http://mths.be/mit) license.
