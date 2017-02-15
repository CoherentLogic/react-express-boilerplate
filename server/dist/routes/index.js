var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', (req, res, next) => {

    //
    // responseObject is the response that will be sent back
    //
    var responseObject = {
        success: true,
        message: "The /api endpoint worked!"
    };

    res.send(responseObject);

});

router.post('/api', (req, res, next) => {

    var responseObject = {
        success: true
    };

    //
    // req.body contains the JSON that you would
    // probably want to write to a database.
    //
    // Here, we're just logging it to the JS console and
    // sending a simple {success: true} back as the response.
    //
    console.log(req.body);

    res.send(responseObject);

});

module.exports = router;
