# Send mail using nodejs
- Repository for send mail
- Using this code you can send mail to every gmail account.
- first you need to to one project setup with package.json file. 
- install nodemailer package usnig npm install.
- run command 
```
  npm i nodemailer
  ```
- Go to your google account and open security option then enable the options Less secure app access.
- Now move to your project and create new file sendmail.js and import nodemailer.
- create transporter in sendmail.js like .....
 ```
 const smtpTransporte = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    appKey: appKey
  },
}); 
```
- In user put your mail address and in appKey put your gmail app key.
- then create mail options all detailes mention regardirng your mail sender, receiver, subject and body etc..
```
const mailOptionsAttachment = {
  from: '"sonu rawal" sonu@codeops.tech ', // sender address
  to: "sonalrawal217@gmail.com", // list of receivers
  subject: "check mail test", // Subject line
  text: "There is a new article. It's about sending emails, check it out!", // plain text body
  html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
  attachments: [
    {
      // filename and path
      path: "./downloads/museum.pdf", // any file if you want to send with mail
    },
  ],
};
```
- then create sendmail function for transporter ..
```
smtpTransporte.sendMail(mailOptionsAttachment, function (error, response) {
  if (error) {
    console.log(error);
    
  } else {
    console.log("Message sent: true "); 
    
  }
});
```
- run the script on terminal
```
node sendmail.js 
```
Now if its working well then you got output true.

- If you want to send mail using send request go to the send mail API folder in above src and try it..

 
