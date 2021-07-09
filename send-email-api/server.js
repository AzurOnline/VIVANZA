const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app = express(),
    app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// port = process.env.PORT || 3000;
// app.listen(port);

app.listen(4000, () => {
    console.log("The server started on port 4000");
});

// console.log('email RESTful API server started on: ' + port);

const sendMail = (emailInfo, callback) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noreply@azursis.com',
            pass: '+Lqp8:lbK'
        }
    });

    const emailOptions = {
        from: '"noreply@azursis.com"',
        to: emailInfo.to,
        subject: emailInfo.subject,
        html: "<p>" + emailInfo.html + "</p>",
        attachments: emailInfo.attachments
    };

    transporter.sendMail(emailOptions, callback);
}

app.post('/api/EnviarEmail', (req, res) => {

    var params = req.body;

    let emailInfo = {
        to: params.emailTo,
        subject: params.emailSubject,
        html: params.emailHtml,
        attachments: params.emailAttachments
    }

    console.log("request came");
    // let user = req.body;
    sendMail(emailInfo, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
})