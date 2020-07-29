const net = require('net');

const connect = function() {
  // defines connection to server
  const conn = net.createConnection({ 
    host: 'localhost', // 135.23.222.131 <- LHL's server address
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // event handler for messages received from server (f.e. message for being kicked when idle)
  conn.on('data', function(message) {
    console.log(message);
  });

  // event handler when connecting to the server. sends server our username - (key Name, value MB). Also logs for the user that confirms joining the server
  conn.on('connect', () => {
    conn.write('Name: MB');
    console.log('Joined the server!');
  });

  // event handler that sends a message to the server. Server is set to handle specific strings as move inputs. this is not the ultimate movement input, just for testing
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });
  
  return conn;
}

module.exports = { connect }