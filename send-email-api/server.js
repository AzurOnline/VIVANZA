const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const multer = require('multer');
var path = require('path');

app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// port = process.env.PORT || 3000;
// app.listen(port);

app.listen(4000, () => {
    console.log("The server started on port 4000");
});

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'archivos/VIVANZA/email');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

var upload = multer({storage: storage});

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

var emailAttachments = [];

app.post('/api/EnviarEmail', (req, res) => {

    var params = req.body;

    let emailInfo = {
        to: params.emailTo,
        subject: params.emailSubject,
        html: params.emailHtml,
        attachments: emailAttachments
    }

    console.log("request came");
    // let user = req.body;
    sendMail(emailInfo, (err, info) => {
        if (err) {
            console.log(err);
            res.send({status: false});
            emailAttachments = [];
        } else {
            res.send({status: true});
            emailAttachments = [];
        }
    });
})

app.post('/api/SubeArchivos', upload.array('files'), (req, res) => {
    const files = req.files;
    console.log(files);
    if (files) {
        for (const file of files) {
            var attachment = {
                filename: file.originalname,
                path: __dirname + "/" + file.destination + '/' + file.originalname
            }
            emailAttachments.push(attachment);
        }
        res.send({status: true});
    }
    else{
        const error = new Error('Debe de subir una imagen');
        return next({status: false});
    }
})