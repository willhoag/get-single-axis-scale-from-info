# get-single-axis-scale-from-info

Calculate the size and position of scaling on a single axis from anywhere on that axis. This works for any system that calculates from the top or left, like your browser's dom!

[![Build Status](https://travis-ci.org/willhoag/get-single-axis-scale-from-info.svg)](https://travis-ci.org/willhoag/get-single-axis-scale-from-info)
[![npm version](https://badge.fury.io/js/get-single-axis-scale-from-info.svg)](http://badge.fury.io/js/get-single-axis-scale-from-info)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install get-single-axis-scale-from-info --save
```

## Usage

```js
// require module
var getSingleAxisScaleFromInfo = require('get-single-axis-scale-from-info');

getSingleAxisScaleFromInfo({
  from: 8, // scale from position
  scale: 2, // amount to scale
  size: 4, // current size
  position: 0 // current position
}) // { size: 8, position: -8 }

getSingleAxisScaleFromInfo({
  from: 0,
  scale: 0.5,
  size: 4,
  position: 4
}) // { size: 2, position: 2 }
```

## API
```js
getSingleAxisScaleFromInfo(spec: Object)
```

### spec object parameters (required)
``` js
{
  from: Number, // The position to scale from on the axis
  scale: Number, // The multiplier amount to scale from position listed above
  size: Number, // Current length of the thing you are scaling
  position: Number // The current position of the thing you are scaling (top or left)
}
```

### returns
``` js
{
  size: Number, // The new size after performing scale
  position: Number // The new position after performing scale
}
```

## License

MIT
