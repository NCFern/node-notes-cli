const read = require('./read');


const selectFile = process.argv[2];
console.log(process.argv);

if (selectFile === 'read') {
  console.log(read());


}
