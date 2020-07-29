let connection;

// function that defines user inputs and settings:
const setupInput = function(conn) {
  const stdin = process.stdin;
  // all inputs are considered without modifiers. not sure why this is necessary, but it's the reason why ctrl+c does not executes a SIGINT when in the program
  stdin.setRawMode(true);
  // handles all node encoding in comprehensible text for us poor humans
  stdin.setEncoding('utf8');
  // allows continuous input receiving. very nice
  stdin.resume();

  // event that handles all valid key inputs. functions listed in the callback are the only keys the program reacts to.
  stdin.on('data', (key) => {
    handleUserInput(key)
  })

  connection = conn;

  function handleUserInput(key) {
    
    // wasd binds to the 4 directions
    if (key === '\u0077') { // w
      connection.write("Move: up")
    }
    if (key === '\u0073') { // s
      connection.write("Move: down")
    }
    if (key === '\u0061') { // a
      connection.write("Move: left")
    };
    if (key === '\u0064') { // d
      connection.write("Move: right")
    };

    // y bind sends custom message
    if (key === '\u0079') {
      connection.write("Say: test")
    };

    //ctrl+c binded to SIGINT
    if (key === '\u0003') {
    process.exit();
    };
  }  

  return stdin;
};

module.exports = { setupInput };