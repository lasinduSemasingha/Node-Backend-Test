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
    to: 'lasindudileepa2001@gmail.com',
    subject: 'Sending email using Node.Js',
    text: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #ff4081;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5em;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h2 {
            color: #333333;
        }
        .content p {
            font-size: 1.2em;
            color: #666666;
            line-height: 1.6;
        }
        .footer {
            background-color: #f4f4f4;
            color: #888888;
            text-align: center;
            padding: 10px;
            font-size: 0.9em;
        }
        .footer a {
            color: #ff4081;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Happy Birthday!</h1>
        </div>
        <div class="content">
            <h2>Dear Sudarshan,</h2>
            <p>
                Wishing you a day filled with happiness and a year filled with joy.
                May this birthday bring you all the success and happiness you deserve.
            </p>
            <p>
                Celebrate your special day with laughter and love, surrounded by your
                friends and family. Here's to another fantastic year of adventures
                and achievements.
            </p>
            <p>
                Cheers to you on your birthday! 🎉🎂
            </p>
        </div>
        <div class="footer">
            <p>
                Sent with love from all of us at Associated Motor Finance.
                <br>
            </p>
        </div>
    </div>
</body>
</html>
`
};

transporter.sendMail(mailOption, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});