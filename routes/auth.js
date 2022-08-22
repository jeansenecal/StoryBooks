const express = require('express');
const passport = require('passport');
const router = express.Router();

//@desc Authenticate with Google
//@route Get /aut/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//@desc Google auth callback
//@route Get /auth/google/callback
router.get('/google/callback',
    passport.authenticate('google', {failureRedirect: '/'}), 
    (req, res) => {
        res.redirect('/dashboard');
    }
);

//@desc Logout a user
//@route Get /auth/logout
router.get('/logout', (req, res) => {
    req.logout( (err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;