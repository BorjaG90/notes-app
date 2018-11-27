const   express         = require('express'),
        path            = require('path'),
        exphbs          = require('express-handlebars'),
        methodOverride  = require('method-override'),
        session         = require("express-session"),
        flash           = require('connect-flash');

// Init
const app = express();
require("./database");

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'mySecretApp',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

// Global
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  
  next();
});

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Server init
app.listen(app.get('port'), () =>{
  console.log('[Server Init] on port', app.get('port'));
});