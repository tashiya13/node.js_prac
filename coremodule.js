// const myfile = require('fs')
// console.log(" node js core module")
// myfile.writeFileSync("coreModules.txt","node js file core module")


// second way of doing it

const myfile = require('fs').writeFileSync
console.log(" node js core module")
myfile("coreModules2.txt","node js file core module")


