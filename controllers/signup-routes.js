const router = require('express').Router();

/*
    function: GET_ROOT
    
    Respond to all GET requests given the route to the login page
*/
const GET_root = (req, res) => res.render('signup', { 
    pageTitle: 'Sign Up' 
});

// set routes
router
    .route('/')
    .get(GET_root)

module.exports = router;