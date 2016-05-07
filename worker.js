module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid);

  var scServer = worker.scServer;

  scServer.on('connection', function (socket) {
  });
};
