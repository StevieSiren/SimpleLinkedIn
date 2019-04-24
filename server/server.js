const express = require('express'),
      app = express(),
      port = process.env.PORT || 5000,
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      path = require('path');


// =====================================
// =====================================
// === APP SETUP === //
// =====================================
// =====================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

// =====================================
// =====================================
// === DB CONFIG === //
// =====================================
// =====================================
const db = require('./config/keys');

mongoose.connect(db.mongoURI, {useNewUrlParser: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));



// =====================================
// =====================================
// === ROUTE SETUP === //
// =====================================
// =====================================
const usersRoutes = require('./routes/api/users'),
      profileRoutes = require('./routes/api/profile'),
      postsRoutes = require('./routes/api/posts');

app.use('/api/users', usersRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Serve static assets
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    })
}






app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});