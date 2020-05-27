const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan =require('morgan')
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const BookRouter=require('./routes/books');
const UserRouter=require('./routes/users');


mongoose.connect(config.database,{useUnifiedTopology:true,useNewUrlParser:true} );
// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
});

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/books',BookRouter)
app.use('/users',UserRouter)


app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});