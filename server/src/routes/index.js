const crypto = require('crypto')
const express = require('express');
const router = express.Router();

function hash(string) {
    const secret = "a secret";
    return crypto.createHmac('sha256', secret).update(string).digest('hex');
}

var userData = [
    {
        username: "mithrandir",
        name: {
            salutation: "Mr.",
            first: "Gandalf",
            middle: "J",
            last: "Stormcrow"
        },
        passwordHash: hash("keepItSecret!")
    },
    {
        username: "frodo",
        name: {
            salutation: "Mr.",
            first: "Frodo",
            middle: "P",
            last: "Baggins"
        },
        passwordHash: hash("keepItSafe!")
    }
];


router.post('/api/login', (req, res, next) => {

    res.header("Content-Type", "application/json");



});

router.get('/api/users', (req, res, next) => {

    res.header("Content-Type", "application/json");

    var response = {
        users: userData,
        success: true
    };

    res.send(response);

});

router.post('/api/users', (req, res, next) => {

    res.header("Content-Type", "application/json");

    userData.push(req.body);

    var response = {
        success: true,
        user: req.body
    };

    res.send(response);

});

module.exports = router;
