const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

const user = process.env["USER_ADD"];
const appKey = process.env["MY_APPKEY"];


router.post('/sendmail',(req,res)=>{
    const {from,to,subject,body,file} =  req.body
    const smtpTransporte = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: user ,   // your email address
          appKey: appKey , // your api key
        },
      });
      
      var mailOptionsAttachment = {
        from: `"sonu rawal" ${from}`, // sender address
        to: to , // list of receivers
        subject: subject , // Subject line
        text: body, // plain text body
        attachments: [
            {
              // filename and path
              path: file
            },
          ],
        
      };
      
      smtpTransporte.sendMail(mailOptionsAttachment, function (error, response) {
        if (error) {
          console.log(error);
          res.send("error");
        } else {
          console.log("Message sent: " + response.messageId);
           res.send("sent");
        }
      });
      

})

module.exports = router;