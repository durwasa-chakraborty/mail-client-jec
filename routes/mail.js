var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var volunteer_mail = {
    'volunteer-1':'xyz@gmail.com',
    'volunteer-2':'abc@gmail.com',
    'volunteer-3':'pqr@gmail.com',
    'volunteer-4':'qwert@gmail.com',
    'volunteer-5':'tuvwxy@gmail'
}


router.get('/',function(req,res,next){
    res.render('mail', {title:'Email'});
});

router.post('/send',function(req,res,next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jecdev@gmail.com',
            pass: 'jec@jabalpur'
        }
    });
    var mailOptions = {
        from: req.body.name,
        to : volunteer_mail[req.body.volunteer.toString(),
        subject: req.body.subject,
        text: req.body.email
    };

    transporter.sendMail(mailOptions,function(e,info){
        if (e) {
            console.log(e);
            res.redirect('/');
        }
        else if(volunteer_mail[req.body.volunteer.toString()]!==undefined)){
            console.log('message-sent');
            res.redirect('/');
        }
        else {
            console.log('invalid email');
            res.redirect('/');
        }
    });
});


module.exports = router