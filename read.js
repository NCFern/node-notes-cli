const fs= require('fs')
const data = require('./data.json')

const read = console.log(JSON.stringify(data.notes[1]))

exports.read = read;

// const read = fs.readFile('./data.json.notes', 'utf8', (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log('There was an error');
//   }
// });
