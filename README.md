[![Build Status](https://api.travis-ci.org/leakypixel/ipv4-to-integer.svg)](https://travis-ci.org/leakypixel/ipv4-to-integer)
[![Code Climate](https://codeclimate.com/github/leakypixel/ipv4-to-integer/badges/gpa.svg)](https://codeclimate.com/github/leakypixel/ipv4-to-integer)
[![Test Coverage](https://codeclimate.com/github/leakypixel/ipv4-to-integer/badges/coverage.svg)](https://codeclimate.com/github/leakypixel/ipv4-to-integer/coverage)
# ipv4-to-integer
NPM module to convert IPv4 addresses to integers.

## Usage
```
var convert = require('ipv4-to-integer');
convert('192.168.0.1') // returns 3232235521
```

## Test
```
npm test
```

## Return values
This module will return NaN in the case of a badly-formatted IP, or a number in
the case of a non-valid but correctly-formatted IP.

The reasoning for returning NaN is thus: we're converting to a number, so we're
expecting to do some sort of comparison with it - which will always fail in the
case of NaN being compared. Secondly, an IP is a representation of a number - if
the format is incorrect then it is technically not a number and thus NaN is
correct.

The reasoning for not checking the validity of an IP is mostly practical - this
module is a single-concern module. Checking the validity of an IP should be done
in a separate module, as that requires it be explicitly included (sometimes, we
may either trust the original source of the data, or simply not care).
