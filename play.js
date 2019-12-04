
//const conn = require('client');
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)



/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
  handleUserInput(key) 
  })

  return stdin;
}




const handleUserInput = function(key) {

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
}



setupInput()