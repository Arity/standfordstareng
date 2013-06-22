#!/usr/bin/env node

var fs = require("fs");
var outfile = "primes.txt";
var primestr = "\n";

var genPrimes = function() {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= 541; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= 541; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
};

var primes = genPrimes();
for (var i = 0; i <= primes.length; i += 1) {
    primestr +=  primes[i] + ",";

  }

var primestr = primestr.slice(0, primestr.length - 11) + "\n";
fs.writeFileSync(outfile, primes);
