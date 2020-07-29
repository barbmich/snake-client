const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function (message) {
    console.log(message);
  });

  conn.on('connect', () => {
    conn.write('Name: MB');
    console.log('Joined the server!');
    // client.write('Hello there!');
  });

  conn.on('connect', () => {
    // conn.write('Move: up');

  });
  
  return conn;
}

module.exports = { connect }