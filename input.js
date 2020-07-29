// function that defines user inputs and settings:
const setupInput = function() {
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

  function handleUserInput(key) {
    if (key === '\u0003') {
    process.exit();
    };
  }  

  return stdin;
};

module.exports = setupInput;