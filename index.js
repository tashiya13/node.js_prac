// console.log('hello worldnode ')
// console.log(process.platform)
// console.log(process.env.USER)


// next code is here

// const { EventEmitter } = require('events');  // Destructuring to import EventEmitter
// const eventEmitter = new EventEmitter();     // Create an instance of EventEmitter

// eventEmitter.on('lunch', () => {
//     console.log('yummy');
// });

// eventEmitter.emit('lunch');  // Triggers the 'lunch' event
// eventEmitter.emit('lunch');  // Triggers the 'lunch' event again





// file system is here

// const { readFile, readFileSync } = require('fs')

// const txt = readFileSync('./hello.txt', 'utf8', (err,txt) => {
//     console.log(txt)
// });

// console.log(txt)

// console.log('do this aasap')



// promises starts from here
const {readFile} = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt','utf-8')
}

