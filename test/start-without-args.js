var helper = require('./');
var assert = require('assert')
var forky = require('../');
var cluster = require('cluster')

var running = false

var master = forky(helper.serverPath)
cluster.on('listening', function() {
  console.log('listening')
  running = true
  process.exit(0)
})

process.on('exit', function() {
  assert(running, "should be listening")
})
