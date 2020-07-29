// const net = require('net');


const { connect } = require('./client');

// logs message to user as soon as play is ran
console.log('Connecting ...');
connect();


/* 
// handles standard input from the user. logs the key presses on the user terminal.
process.stdin.on('data', function(message) {
  client.write(message);
});
*/