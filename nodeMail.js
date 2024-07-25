var nodemailer = require('nodemailer');

var transporter =nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'lasindusemasingha@hotmail.com',
        pass: 'Lasindu$2001'
    }
});

var mailOption = {
    from: 'lasindusemasingha@hotmail.com',
    to: 'tharindughv@gmail.com',
    subject: 'Sending email using Node.Js',
    text: 'Hi this is from Node mailer - Lasindu'
};

transporter.sendMail(mailOption, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});