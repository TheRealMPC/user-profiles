const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const profileCtrl = require('./controllers/profileCtrl');
const userCtrl = require('./controllers/userCtrl');
const config = require('./config.js');
const port = 3000;
const corsOptions = {
	origin: 'http://localhost:3000'
};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));

app.get('/api/findFriend', profileCtrl.findFriend);

app.post('/api/login', userCtrl.login);

app.listen(port, function(){
  console.log("Listeing on port ", port);
});
