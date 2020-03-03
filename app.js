require('./lib/logger')
const files = require('./lib/files')

//this is the point of entry.
//we will now get the command from the command line and parse the file name 

const fileName = process.argv.pop();
//get the name of the file to operate on.
// const fileName = 'thing.txt'

//call our custom library function alterFile() on the input file

files.alter(fileName)
