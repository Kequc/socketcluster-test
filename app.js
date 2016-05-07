var SocketCluster = require('socketcluster').SocketCluster;
var socketCluster = new SocketCluster({
  workers: 1, // Number of worker processes
  brokers: 1, // Number of broker processes
  port: process.env.VCAP_APP_PORT || process.env.PORT || 9001,
  appName: 'socketcluster-test',
  workerController: __dirname + '/worker.js',
  brokerController: __dirname + '/broker.js',
  rebootWorkerOnCrash: true
});
