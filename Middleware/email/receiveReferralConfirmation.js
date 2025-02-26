import { transporter } from "../Email.config.js";

export async function receiveReferralConfirmation({
  referrerName,
  refereeName,
  courseName,
  refereeEmail,
  message
}) {
  try {
    const info = await transporter.sendMail({
      from: '"accredian" <moodyadi30@gmail.com>', 
      to: `${refereeEmail}`,
      subject: "Referral email receive Confirmation", 
      text: `You have been referred by <strong>${referrerName}</strong> for the <strong>${courseName}</strong> course!`, // plain text body
      html: `
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Referral Confirmation</title>
          </head>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h1>Referral Confirmation</h1>
            <p>Hi ${refereeName},</p>
            <p>
              You have been referred by <strong>${referrerName}</strong> for the <strong>${courseName}</strong> course!
            </p>
            <p>His words: ${message}</p>
            <p>
              We’re excited to have you join us. Let us know if you have any questions.
            </p>
            <p>Best,</p>
            <p>The accredian Team</p>
            
          </body>
        </html>
      `,
    });

    return {
      success: true,
      message: "Referral email sent successfully",
    };
  } catch (error) {
    console.error("Error sending referral email", error);
  }
}
