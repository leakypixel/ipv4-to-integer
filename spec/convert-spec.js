var convert = require('../convert');

var KNOWN_IP_VALUES = [
  {'ip':'207.227.32.0','value':3487768576},
  {'ip':'103.1.135.255','value':1728153599},
  {'ip':'94.45.223.255','value':1580064767},
  {'ip':'36.255.148.0','value':620729344},
  {'ip':'5.39.101.160','value':86468000},
  {'ip':'202.181.31.255','value':3400867839},
  {'ip':'91.227.123.255','value':1541635071},
  {'ip':'185.96.255.255','value':3110141951},
  {'ip':'93.93.96.191','value':1566400703},
  {'ip':'200.115.180.0','value':3363025920},
  {'ip':'37.59.88.96','value':624646240},
  {'ip':'210.176.33.0','value':3534758144},
  {'ip':'157.191.255.255','value':2646605823},
  {'ip':'77.237.223.255','value':1307435007},
  {'ip':'193.134.161.255','value':3246825983}
];

var BAD_VALUES = [
  'drxfctgvhbjn',
  'y7r4thgv5n74t n80vm',
  '26735.863..3765.9',
  345678,
  '1.1.1',
  3333,
  ''
];

var BAD_IPS = [
  '333.333.333.333',
  '-13.-12.-11.-2',
  '1111.1111.2222.5555'
];

describe("IPv4 conversion algorithm", function() {

  it("Should match known IPv4 values", function() {
    var index = 0, 
      length = KNOWN_IP_VALUES.length;
    
    for (; index < length; index++) {
      var knownIP = KNOWN_IP_VALUES[index];
      expect(convert(knownIP.ip)).toEqual(knownIP.value);
    }
  });

  it("Should return NaN if the value passed is not in the correct format", function() {
    var index = 0, 
      length = BAD_VALUES.length;
    
    for (; index < length; index++) {
      expect(convert(BAD_VALUES[index])).toBeNaN();
    }
  });

  it("Should return an integer, even if the value passed is not a valid IP", function() {
    var index = 0, 
      length = BAD_IPS.length;
    
    for (; index < length; index++) {
      var returnValue = convert(BAD_IPS[index]);
      expect(returnValue).not.toBeNull();
      expect(returnValue).not.toBeNaN();
      expect(returnValue).toBeDefined();

    }
  });
});
