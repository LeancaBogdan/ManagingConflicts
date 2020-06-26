const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const { sendEmail } = require('./mailer');


app.post("/api/sendMail", (req, res) => {
    sendEmail(req.body.email, req.body.subject, req.body.message)
})


app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})