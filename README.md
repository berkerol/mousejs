# Mouse.js

[![NPM](https://nodei.co/npm/mousejs.png)](https://nodei.co/npm/mousejs/)

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=berkerol_mousejs&metric=alert_status)](https://sonarcloud.io/dashboard?id=berkerol_mousejs)
[![Renovate](https://badges.renovateapi.com/github/berkerol/mousejs)](https://renovatebot.com/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/berkerol/mousejs/issues)
[![semistandard](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![ECMAScript](https://img.shields.io/badge/ECMAScript-latest-brightgreen.svg)](https://www.ecma-international.org/ecma-262)
[![license](https://img.shields.io/badge/license-GNU%20GPL%20v3.0-blue.svg)](https://github.com/berkerol/mousejs/blob/master/LICENSE)

Move your mouse with arrow keys on the keyboard (Meta + Alt + arrow keys / Enter).

## Features

* Also works without focus (outside of terminal)
* Set horizontal and vertical speed of mouse.

## Installation

```
$ npm install mousejs
```

## Usage

Flag | Short | Description | Usage
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

## Contribution

Feel free to [contribute](https://github.com/berkerol/mousejs/issues) according to the [semistandard rules](https://github.com/Flet/semistandard) and [latest ECMAScript Specification](https://www.ecma-international.org/ecma-262).

## Distribution

You can distribute this software freely under [GNU GPL v3.0](https://github.com/berkerol/mousejs/blob/master/LICENSE).
