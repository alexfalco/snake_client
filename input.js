
//const conn = require('client');
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)


let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
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

if (key === 'w') { connection.write("Move: up")
}
if (key === 's') { connection.write("Move: down")
}
if (key === 'd') { connection.write("Move: right")
}
if (key === 'a') { connection.write("Move: left")
}
if (key === 'z') { connection.write("Plz")
}
if (key === '\u0003') {
    process.exit();
  }
}



setupInput()

module.exports.setupInput = setupInput;