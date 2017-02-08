ina (Is Name Available)
=========

Check name availability on npm


## Installation
```bash
npm install ina --save
```

## Usage

```javascript
const ina = require('ina');

// get the package info
ina.check('package-name').then((info) => {
    // info
})

// get the package info with download count for the last month
ina.check('package-name', true).then((info) => {
    // info
})
```
## API

.check() accepts 2 parameters:
* The first parameter is the package name
* The second parameter is boolean, if it's tro the download count for the last month will be included

## Example responses

Response for existing package with downloads count:
```javascript
{
    id: 'package-name',
    exists: true,
    version: '0.1.0',
    modified: 'LatestTimeStamp',
    published: true,
    dowloadsLastMonth: 100
}
```

Response for not existing package:
```javascript
{
    exists: false
}
```
