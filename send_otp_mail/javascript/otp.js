const nodemailer = require("nodemailer");

async function sendMail(toEmail, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Your email",
      // user: "Name@example.com",
      pass: import.meta.env.Password,
    },
  });
  const mailOptions = {
    from: "Jonah@example.com",
    to: toEmail, //respective person 
    subject: "OTP Verification",
    html: `      <div style="text-align: center; font-family: Arial, sans-serif;">
        <img src="../public/images/robot.jpg" alt="Company Logo" style="width: 100px; height: 100px;">
        <h1>Company Name</h1>
        <p>Your OTP is: <strong>${otp}</strong></p>
        <p>This OTP is valid for 5 minutes.</p> 
      </div>
   `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email send successfully");
    return true;
  } catch (error) {
    console.log("Error", error);
    return false;
  }
}

module.exports = sendMail;
