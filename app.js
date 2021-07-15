var nodemailer = require('nodemailer');
var express = require("express")
var bodyParser = require("body-parser")
var cron = require('node-cron');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3900;
const app = express()


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manasraj9669@gmail.com',
    pass: ''
  }
});


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


app.post("/sign_up",(req,res)=>{

  var email = req.body.name;  
  var content= req.body.sub;
    var mailOptions = {
      from: 'manasraj9669@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: content
    };
  cron.schedule('*/1 * * * *', () => {
     transporter.sendMail(mailOptions, function(error, info){
       if (error) {
       console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
         }
     });
        });


})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});