const fs= require('fs')
const dataJSON = require('./data.json')

console.log(dataJSON)
const read = fs.readFile('dataJSON', 'utf8', (err, data) => {
  if (!err) {
    console.log(dataJSON);
  } else {
    console.log('There was an error');
  }
});

exports.read = read;
