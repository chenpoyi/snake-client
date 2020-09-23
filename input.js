const { stderr } = require("process");
const {KEY_MAPPING} = require("./constants")
let connection;



const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data)=>handleUserInput(data));
  connection = conn;
  return stdin;
  
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else {
    connection.write(KEY_MAPPING[data]);
  }
  
};

module.exports = {
  setupInput,
  handleUserInput
};
// if (data === 'w') {
//   connection.write('Move: up');
// } else if (data === 'a') {
//   connection.write('Move: left');
// } else if (data === 's') {
//   connection.write('Move: down');
// } else if (data === 'd') {
//   connection.write('Move: right');
// } else if (data === 'g') {
//   connection.write('Say: gg');
// } else if (data === 'f') {
//   connection.write('Say: nice!');