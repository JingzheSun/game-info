var express = require('express');
var app = express();
var path = require('path');
var gameRouter = require('./routers/gameRouter.js');

require('./database_connect.js');
app.use(express.static(path.join(__dirname, '../static')));

app.use('/games', gameRouter);

app.use('/', (req,res)=>{
     res.sendFile(path.resolve(__dirname, '../static/index.html'));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
	console.log('listening '+ app.get('port'));
});
