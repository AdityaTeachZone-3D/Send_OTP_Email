# Send OTP Mail

![OTP Icon](https://img.icons8.com/ios-filled/50/000000/lock.png)

## 📧 Introduction

Welcome to the **Send OTP Mail** project! This project allows you to send One-Time Passwords (OTPs) via email for authentication purposes. It's a simple and secure way to verify user identities.

## 🚀 Features

- 🔒 Secure OTP generation
- 📬 Email delivery using SMTP
- ⏱️ Configurable OTP expiration time
- 📱 Mobile-friendly email templates

## 🛠️ Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/send-otp-mail.git
  ```
2. Navigate to the project directory:
  ```bash
  cd send-otp-mail
  ```
3. Install the dependencies:
  ```bash
  npm install
  ```

## ⚙️ Configuration

1. Create a `.env` file in the root directory and add your SMTP configuration:
  ```env
  SMTP_HOST=smtp.example.com
  SMTP_PORT=587
  SMTP_USER=your-email@example.com
  SMTP_PASS=your-email-password
  ```

2. Customize the OTP settings in `config.js`:
  ```javascript
  module.exports = {
    otpLength: 6,
    otpExpiry: 300 // in seconds
  };
  ```

## 📤 Usage

1. Import the `sendOtp` function and use it in your code:
  ```javascript
  const { sendOtp } = require('./sendOtp');

  sendOtp('recipient@example.com')
    .then(() => console.log('OTP sent successfully!'))
    .catch(err => console.error('Error sending OTP:', err));
  ```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License
# Send OTP Mail

![OTP Icon](https://img.icons8.com/ios-filled/50/000000/lock.png)

## 📧 Introduction

Welcome to the **Send OTP Mail** project! This project allows you to send One-Time Passwords (OTPs) via email for authentication purposes. It's a simple and secure way to verify user identities.

## 🚀 Features

- 🔒 Secure OTP generation
- 📬 Email delivery using SMTPconst nodemailer = require('nodemailer');
const {otpLength, otpExpiry} = require('./config');

async function generateOTP() {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < otpLength; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}


async function sendOtp(toEmail) {
  const otp = await generateOTP();
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: toEmail,
    subject: 'Your OTP Code',
    html: `
      <div style="text-align: center; font-family: Arial, sans-serif;">
        <h1>Your OTP Code</h1>
        <p>Your OTP is: <strong>${otp}</strong></p>
        <p>This OTP is valid for ${otpExpiry} seconds.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return otp;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}

module.exports = { sendOtp };

- ⏱️ Configurable OTP expiration time
- 📱 Mobile-friendly email templates

## 🛠️ Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/send-otp-mail.git
  ```
2. Navigate to the project directory:
  ```bash
  cd send-otp-mail
  ```
3. Install the dependencies:
  ```bash
  npm install
  ```

## ⚙️ Configuration

1. Create a `.env` file in the root directory and add your SMTP configuration:
  ```env
  SMTP_HOST=smtp.example.com
  SMTP_PORT=587
  SMTP_USER=your-email@example.com
  SMTP_PASS=your-email-password
  ```

2. Customize the OTP settings in `config.js`:
  ```javascript
  module.exports = {
    otpLength: 6,
    otpExpiry: 300 // in seconds
  };
  ```

## 📤 Usage

1. Import the `sendOtp` function and use it in your code:
  ```javascript
  const { sendOtp } = require('./sendOtp');

  sendOtp('recipient@example.com')
    .then(() => console.log('OTP sent successfully!'))
    .catch(err => console.error('Error sending OTP:', err));
  ```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

![MIT License](https://img.icons8.com/ios-filled/50/000000/open-source.png)

---

Made with ❤️ by [Aditya](https://github.com/AdityaTechZone3D)
