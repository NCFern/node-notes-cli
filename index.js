const fs = require('fs');

const selectFile = process.argv[2];
fs.readFile(`./${selectFile}`, 'utf8', (err, data) => {
  console.log(process.argv[2])
  if (!err) {
    console.log(`Text of ${selectFile}: ${data}`);
  } else {
    console.log('There was an error');
  }
});
