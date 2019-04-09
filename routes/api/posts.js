const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      passport = require('passport');

const Post = require('../../models/Post'),
      validatePostInput = require('../../validation/post');

// === @route   POST /api/posts
// === @desc    Create a new post
// === @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    if(!isValid) {
        // Return any errors
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    newPost.save()
        .then(post => res.json(post));
});


module.exports = router;