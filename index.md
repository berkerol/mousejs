# Mouse.js

Move your mouse with arrow keys on the keyboard. You can view it [on npm](https://www.npmjs.com/package/mousejs).

## Features

* Also works without focus (outside of terminal)
* Set horizontal speed of mouse with `-h` or `--hor` arguments.
* Set vertical speed of mouse with `-v` or `--ver` arguments.

## Installation

```
$ npm install mousejs
```

## Usage

Flag | Short | Meaning | Usage
-----|-------|---------|------
`--hor` | `-h` | Set horizontal speed of mouse | `-h 20`
`--ver` | `-v` | Set vertical speed of mouse | `-v 15`

## Examples

Example | Description
--------|------------
`$ mouse` | Starts with default settings
`$ mouse -h 20` | Starts with a horizontal speed of 20
`$ mouse -v 15` | Starts with a vertical speed of 15
`$ mouse -h 20 -v 15` | Starts with a horizontal speed of 20 and a vertical speed of 15
