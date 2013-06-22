#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Hello, I am ready to take this class!\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " +  out + "To: " + outfile);
