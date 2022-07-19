module.exports = (command, options) => {
  return {
    command,
    description: {
      build: 'Compiles the application for deployment',
      serve: 'Starts the application in development mode'
    }[command],
    ...options
  }
}
