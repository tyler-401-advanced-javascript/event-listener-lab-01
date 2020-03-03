const EventEmitterInstance = require('./events')



const logger = {}

//here is a logger handler when we save stuff successfully.
logger.save = function(message) {
  console.log({
    status: 0,
    file: message,
    message: 'Successfully wrote file.'
  });
}

//here is an error handler that logs stuff when we have an error.
logger.error = function (message) {
  console.error({
    status: 1,
    file: message,
    message: 'Failed to write / read file' 
  });
}


//event listeners. 
EventEmitterInstance.on('file-save', (message) => {
  logger.save(message);
})

EventEmitterInstance.on('file-rw-error', (message) => {
  logger.error(message);
})

module.exports = logger;