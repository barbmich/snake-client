// const net = require('net');
const { connect } = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key)
  })

  function handleUserInput(key) {
    if (key === '\u0003') {
    process.exit();
    };
  }  

  return stdin;
};

setupInput();


// logs message to user as soon as play is ran
console.log('Connecting ...');
connect();


/* 
// handles standard input from the user. logs the key presses on the user terminal.
process.stdin.on('data', function(message) {
  client.write(message);
});
*/