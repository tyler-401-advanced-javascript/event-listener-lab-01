const fs = require('fs')
const util = require('util')
const events = require('./events')

//create async functions from the EFCallbacks supplied by fs.
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const files = {}

files.alter = async function (fileName) {
  //read the file into a Buffer
  try {
    console.log(this)
    const buffer = await this.read(fileName)
    const upperBuffer = this.convertBuffer(buffer);
    await this.write(fileName, upperBuffer);
    // logger.save('wrote file ' + fileName);
    events.emit('file-save', fileName)
  } catch (err) {
    events.emit('file-rw-error', fileName)
  }
}

files.read = async function (fileName) {
  return await readFile(fileName)
}

files.write = async function (file, buffer) {
  return await writeFile(file, buffer)
}

files.convertBuffer = function (buffer) {
  const upper = buffer.toString().trim().toUpperCase();
  return Buffer.from(upper, 'utf-8');
}

module.exports = files;