var nodemailer = require('nodemailer');
var express = require("express")
var bodyParser = require("body-parser")
var cron = require('node-cron');
const port =process.env.PORT || 3900;
const app = express()


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manasraj9669@gmail.com',
    pass: '******'
  }
});


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


app.post("/sign_up",(req,res)=>{

  //getting data from reminder form
  var email = req.body.name;  
  var content= req.body.sub;
    var mailOptions = {
      from: 'manasraj9669@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: content
    };


})
app.listen(port,  () => {
  console.log(`working`);
});