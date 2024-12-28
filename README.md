Creating documentation for your GitHub repository is essential for helping users understand how to use your project effectively. Below is a detailed guide on how to set up your project, generate a password using Google email, and utilize the OTP (One-Time Password) functionality in your application.

### Project Documentation for `send_otp_mail`

#### Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Generating OTP](#generating-otp)
6. [Example Code](#example-code)
7. [Contributing](#contributing)
8. [License](#license)

---

### Introduction
The `send_otp_mail` project is a Node.js application that allows users to generate and send a One-Time Password (OTP) to their email using Nodemailer. This is particularly useful for authentication processes.

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- A Google account for sending emails

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/send_otp_mail.git
   cd send_otp_mail
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of your project and add your Google email credentials:
   ```plaintext
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

   **Note:** For security reasons, you should use an [App Password](https://support.google.com/accounts/answer/185201) instead of your Google account password.

### Usage
1. Start the server:
   ```bash
   node index.js
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter your email address and submit the form to receive an OTP.

### Generating OTP
The OTP is generated using a simple random number generator. The OTP is a 4-digit number, which is sent to the user's email.

Here’s how the OTP generation works in the `index.js` file:
```javascript
const otp = Math.floor(Math.random() * 9000) + 1000; // Generate a 4-digit OTP
```

### Example Code
Here’s a brief overview of the key files in the project:

#### `index.js`
This file sets up the Express server and handles the OTP generation and email sending.

```javascript
const express = require("express");
const nodemailer = require("nodemailer");
const sendMail = require("./javascript/otp");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

#### `otp.js`
This file contains the logic for sending the email with the OTP.

```javascript
const nodemailer = require("nodemailer");

async function sendMail(toEmail, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "OTP Verification",
    html: `<div style="text-align: center;">
             <h1>Your OTP is: <strong>${otp}</strong></h1>
           </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("Error", error);
    return false;
  }
}

module.exports = sendMail;
```

### Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides a comprehensive guide for users to understand how to set up and use your OTP email sending application. Make sure to replace placeholders like `yourusername` and `your_email@gmail.com` with actual values relevant to your project.
