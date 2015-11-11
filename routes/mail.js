var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
router.get('/',function(req,res,next){
    res.render('mail', {title:'Email'});
});

router.post('/send',function(req,res,next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'durwasa.chakraborty@gmail.com',
            pass: 'vishwamitra01123581321345589'
        }
    });
    var mailOptions = {
        from: req.body.name,
        to : req.body.volunteer,
        subject: req.body.subject,
        text: req.body.email
    };

    transporter.sendMail(mailOptions,function(e,info){
        if (e) {
            console.log(e);
            res.redirect('/');
        }
        else {
            console.log('message-sent');
            res.redirect('/');
        }
    });
});


module.exports = router