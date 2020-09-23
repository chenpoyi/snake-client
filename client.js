const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('You have connected to the server.');
    conn.write('Name: PC');
    
    
  });
  conn.on('data', (data) => {
    console.log(`Incoming: ${data}`);
    
  });

  return conn;
};

module.exports = {connect};