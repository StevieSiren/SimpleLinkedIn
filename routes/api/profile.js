const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      keys = require('../../config/keys');

const User = require('../../models/User'),
      Profile = require('../../models/Profile'),
      validateProfileInput = require('../../validation/profile');



// === @route   GET /api/profile
// === @desc    Return current user profile information
// === @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if(!profile) {
                errors.noProfile = 'No profile for user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});


// === @route   GET /api/profile/handle/:handle
// === @desc    Get profile by handle name
// === @access  Public
router.get('/handle/:handle', (req, res) => {
    const errors = {};

    Profile.findOne({ handle: req.params.handle })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if(!profile) {
                errors.noProfile = 'This user does not exist.';
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});


// === @route   GET /api/profile/all
// === @desc    Get all profiles
// === @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Profile.find()
        .populate('user', ['name', 'avatar'])
        .then(profiles => {
            if(!profiles) {
                errors.noProfiles = 'No profiles currently exist!';
                return res.status(404).json(errors);
            }
            res.json(profiles);
        })
        .catch(err => res.status(404).json({ profiles: 'There are no profiles. '}));
});


// === @route   GET /api/profile/user/:user_id
// === @desc    Get profile by handle name
// === @access  Public
router.get('/user/:user_id', (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.params.user_id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if(!profile) {
                errors.noProfile = 'This user does not exist.';
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err => res.status(404).json({ profile: 'There is no profile for this user.' }));
});


// === @route   POST /api/profile
// === @desc    Create/edit user profile
// === @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    if(!isValid) {
        // Return any errors
        return res.status(400).json(errors);
    }

    // Get fields from body
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.bio) profileFields.bio = req.body.bio;
    if(req.body.status) profileFields.status = req.body.status;
    
    // Arrays
    if(typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }
    profileFields.social = {};
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.linkedIn) profileFields.social.linkedIn = req.body.linkedIn;

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if(profile) {
                // Update user profile
                Profile.findOneAndUpdate({ user: req.user.id }, 
                    { $set: profileFields }, 
                    { new: true })
                        .then(profile => res.json(profile));
            } else {
                // Create profile

                Profile.findOne({ handle: profileFields.handle })
                    .then(profile => {
                        if(profile) {
                            errors.handle = 'That handle already exists.';
                            res.status(400).json(errors);
                        }
                        new Profile(profileFields).save()
                            .then(profile => {
                                res.json(profile);
                            });
                    });
            }
        });
});



module.exports = router;