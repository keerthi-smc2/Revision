'use strict';

var server = require('server');


server.get('Show', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');

    var actionUrl = URLUtils.url('Feedback-Success');

    res.render('feedback/feedback',{
        actionUrl: actionUrl
    });

    next();
});

server.post('Success', function (req, res, next) {
    var URLUtils = require('dw/web/URLUtils');

    var name = req.form.name;
    var email = req.form.email;
    var feedback = req.form.feedback;

    res.render('feedback/feedbackSuccess' , {
       name : name,
       email : email,
       feedback : feedback
    });

    next();
});
module.exports = server.exports();