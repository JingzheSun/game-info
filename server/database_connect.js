var mongoose = require('mongoose');
var dburl = 'mongodb://sunjingzhe93:sjz1993213@gamecluster-shard-00-00-qj0rp.mongodb.net:27017,gamecluster-shard-00-01-qj0rp.mongodb.net:27017,gamecluster-shard-00-02-qj0rp.mongodb.net:27017/test?ssl=true&replicaSet=gameCluster-shard-0&authSource=admin';

mongoose.Promise = require('bluebird');
mongoose.connect(dburl);
mongoose.connection
	.on('err', (err) => console.log(err))
	.on('connected', () => { 
		console.log('db connected');
		require('./cd.js')
	})
	.on('disconnected', () => console.log('db disconnected'));