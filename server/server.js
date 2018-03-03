var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var gameRouter = require('./routers/gameRouter.js');
var authRouter = require('./routers/authRouter.js');

var opts = {auth: ''};
if (process.env.REDISTOGO_URL){
  opts = require("url").parse(process.env.REDISTOGO_URL);
}
var options = {
  host: opts.hostname || "127.0.0.1",
  port: opts.port || 6379,
  pass: opts.auth.split(':')[1],
  ttl: 60*60*1 //session expires in 1h
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('GameInfo'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  store: new RedisStore(options),
  secret: 'GameInfo',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

require('./authenticate.js');
require('./database_connect.js');

app.use(express.static(path.join(__dirname, '../static')));

app.use('/auth', authRouter);
app.use('/games', gameRouter);
app.use('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, '../static/index.html'));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
  console.log('listening '+ app.get('port'));
});
