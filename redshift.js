#!/usr/bin/env node
var sys = require("sys");
var exec = require("child_process").exec;
var child;
// executes command here
child = exec("redshift start", function(error, stdout, stderr) {
  console.log("Executed");
  sys.print("stdout: " + stdout);
  sys.print("stderr: " + stderr);
  if (error !== null) {
    console.log("exec error: " + error);
  }
});
console.log(child);
