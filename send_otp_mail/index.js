const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const sendMail = require("./javascript/otp");
const dotenv = require("dotenv");

dotenv.config();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
// app.post("/", (req, res) => {
//   const { email } = req.body;
//   const otp = Math.floor(Math.random() * 9000) + 1000; // Generate a 4-digit OTP
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/", (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(Math.random() * 9000) + 1000; // Generate a 4-digit OTP
  sendMail(email, otp).then((success) => {
    if (success) {
      res.status(200).send({ message: "OTP sent successfully", otp });
    } else {
      res.status(500).send({ message: "Failed to send OTP" });
    }
  });
});

// sucess
