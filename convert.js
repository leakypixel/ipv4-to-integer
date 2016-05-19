'use strict';

function ipv4ToDecimal(ip) {
  var octets = (ip + '').split(".");
  if (octets.length !== 4) {
    return NaN;
  }
  return (octets[0] * 16777216) + (octets[1] * 65536) + (octets[2] * 256) + Number(octets[3]);
}

module.exports = ipv4ToDecimal; 
