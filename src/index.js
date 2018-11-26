const   express         = require('express'),
        path            = require('path'),
        exphbs          = require('express-handlebars'),
        methodOverride  = require('method-override'),
        session         = require("express-session");

// Init
const app = express();

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

// Global

// Routes

// Static files

// Server init
app.listen(app.get('port'), () =>{
    console.log('[Server on port', app.get('port'));
});