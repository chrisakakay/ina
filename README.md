ina (Is Name Available)
=========

Check name availability on npm


## Installation

    npm install ina --save


## Usage

``` javascript
const ina = require('ina');

ina.check('package-name').then((info) => { 
    // info
})
```

Response example for existing package:
``` javascript
{
    exists: true,
    version: 'package-name@0.1.0',
    modified: 'LatestTimeStamp',
    dowloadsLastMonth: 100
}
```

Response example for not existing package:
``` javascript
{
    exists: false
}
```
