# Sens mail using nodejs
- Repository for send mail
- Using this code you can send mail to every gmail account.
- first you need to to one project setup with package.json file. 
- install nodemailer package usnig npm install.
- run command  $ npm i nodemailer
- Go to your google account and open security option then enable the options Less secure app access.
- Now move to your project and create new file sendmail.js and import nodemailer.
- create transporter like .....
- ```
const smtpTransporte = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    appKey: appKey
  },
});
```
- 
