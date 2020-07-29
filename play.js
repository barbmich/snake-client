// const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');

// logs message to user as soon as play is ran
console.log('Connecting ...');
// executes connect from client.js

// executes setupInput from input.js
setupInput(connect());