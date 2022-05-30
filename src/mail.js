const nodemailer = require("nodemailer");

const user = process.env["USER_ADD"];
const password = process.env["MY_PASSWORD"];

const smtpTransporte = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: password,
  },
});

var mailOptionsAttachment = {
  from: '"sonu rawal" sonu@codeops.tech ', // sender address
  to: "sonalrawal217@gmail.com", // list of receivers
  subject: "check mail test", // Subject line
  text: "There is a new article. It's about sending emails, check it out!", // plain text body
  html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
  attachments: [
    {
      // filename and path
      path: "./downloads/museum.pdf",
    },
  ],
};

smtpTransporte.sendMail(mailOptionsAttachment, function (error, response) {
  if (error) {
    console.log(error);
    //res.end("error");
  } else {
    console.log("Message sent: true "); // + response.message);
    // res.end("sent");
  }
});
