const net = require('net');

process.stdin.on('data', function(message) {

  client.write(message);

});

/**
 * Establishes connection with the game server
 */
const connect = function() {
  //creates an object. sets 'host' and 'port' keys to the respective value - (can be seen if we console.log(conn))
  const conn = net.createConnection({ 
    host: 'localhost', // '135.23.222.131' <- Vasily's server address
    port: 50541 //
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //event that handles messages coming from the server. (example, if we stay idle for too long we're kicked off the server, with message annexed)
  conn.on('data', function (message) {
    console.log(message);
  })

  return conn;
}

console.log('Connecting ...');
connect();