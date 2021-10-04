const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send('')
})
 
function keepAlive() {
  server.listen(5000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;
