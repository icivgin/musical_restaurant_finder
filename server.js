var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
	mongoose = require('mongoose'),
	session = require('express-session');

var db = require('./models/models');
var Map = require('./models/map');

mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/sound-bites');

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: 'ask23788foawe7fy98hfiuaujiuhweflaushdo87iwhf982398fhwaep',
	cookie: { maxAge: 60000 }
}));

// middleware to manage sessions
app.use('/', function (req, res, next) {
  // saves userId in session for logged-in user
  req.login = function (user) {
    req.session.userId = user.id;
  };

  // finds user currently logged in based on `session.userId`
  req.currentUser = function (callback) {
    db.User.findOne({_id: req.session.userId}, function (err, user) {
      req.user = user;
      callback(null, user);
    });
  };

  // destroy `session.userId` to log out user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  };

  next();
});

app.get('/logout', function (req, res, next) {
	req.logout();
	res.redirect('/');
});

app.get('/', function (req, res, next) {
	res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/profile', function (req, res, next) {
	req.currentUser(function (err, user) {
		if(user) {
			res.sendFile(__dirname + '/public/views/profile.html');
		} else {
			res.redirect('/login');
		}
	})
});


app.get('/signup', function (req, res, next) {
	res.sendFile(__dirname + '/public/views/signup.html')
});

app.post('/signup', function (req, res) {
	var newUser = req.body;

	db.User.createSecure(newUser, function (err, user) {
		req.login(user);
		res.redirect('/');
	});
});

app.get('/login', function (req, res, next) {
	res.sendFile(__dirname + '/public/views/login.html')
});

app.post('/login', function (req, res) {
	var userData = req.body;

	db.User.authenticate(userData, function (err, user) {
		if(err === 1) {
			res.sendFile(__dirname + '/public/views/error.html');
		} else if (err === 2) {
			res.sendFile(__dirname + '/public/views/error.html');
		} else {
		req.login(user);
		res.redirect('/profile');
		}
	});
});

//API
app.get('/v1/me', function(req, res) {
	req.currentUser(function (err, user) {
		if (user) {
			res.send(user);
		} else {
			res.send(null);
		}
	});
});

//DATA VALIDATION
app.get('/v1/users/find/userName/:userName', function (req, res) {
	var targetUserName = req.params.userName;
	
	db.User.findOne({userName: targetUserName}, function (err, foundUser) {
		if(foundUser) {
			res.json(foundUser.userName)
		} else {
			res.json('');
		}
	});
});
app.get('/v1/users/find/email/:email', function (req, res) {
	var targetEmail = req.params.email;
	
	db.User.findOne({email: targetEmail}, function (err, foundUser) {
		if(foundUser) {
			res.json(foundUser.email)
		} else {
			res.json('');
		}
	});
});


app.get('/v1/users/:userId', function (req, res) {
	var targetId = req.params.userId;

	db.User.findOne({_id: targetId}, function (err, foundUser) {
		res.send(foundUser);
	});
});

app.put('/v1/users/:userId', function (req, res) {
	var targetId = req.params.userId;

	db.User.findOne({_id: targetId}, function (err, foundUser) {
		foundUser.myResults.push({
			trackNameResult: req.body.trackNameResult,
			artistNameResult: req.body.artistNameResult,
			albumArt: req.body.albumArt,
			venueName: req.body.venueName,
			venueCat: req.body.venueCat,
			venueLat: req.body.venueLat,
			venueLng: req.body.venueLng,
			venueAddressA: req.body.venueAddressA,
			venueAddressB: req.body.venueAddressB,
			venueRating: req.body.venueRating,
			venueURL: req.body.venueURL
		});

		foundUser.save(function (err, savedUser) {
			res.json(savedUser);
		});
	});
});

app.get('/v1/search/:inputA/:inputB', function (req, res) {
	Map.map(req.params.inputA, req.params.inputB, function (query) {
		res.send(query);
	});
});

app.listen(process.env.PORT || 3000);