const express = require('express'),
    router = express.Router(),
    User = require('../../models/User'),
    gravatar = require('gravatar'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    keys = require('../../config/keys'),
    passport = require('passport');

const validateRegisterInput = require('../../validation/register'),
      validateLoginInput = require('../../validation/login');

// =============================================
// === GET USER === //
// =============================================
router.get('/test', (req, res) => {
    res.json({
        msg: 'Users is responding!'
    });
});

// === @route   /api/users/register
// === @desc    Register a user
// === @access  Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});




// === @route   /api/users/login
// === @desc    Login user / Return JWT
// === @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email,
        password = req.body.password;

    User.findOne({
            email: email
        })
        .then(user => {
            if (!user) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar
                        };
                        // Send JWT
                        jwt.sign(payload, keys.SECRET_KEY, {
                            expiresIn: 3600
                        }, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        });
                    } else {
                        errors.password = 'Password incorrect!';
                        return res.status(400).json(errors);
                    }
                });
        });
});





// === @route   /api/users/current
// === @desc    Return current user
// === @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});



module.exports = router;