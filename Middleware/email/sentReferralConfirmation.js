import { transporter } from "../Email.config.js";

export async function sentReferralConfirmation({
  referrerName,
  referrerEmail,
  refereeName,
  courseName,
}) {
  try {
    const info = await transporter.sendMail({
      from: '"accredian" <moodyadi30@gmail.com>', // sender address
      to: `${referrerEmail}`, // list of receivers
      subject: "Referral email sent Confirmation",
      text: `You have successfully referred <strong>${refereeName}</strong> for the <strong>${courseName}</strong> course`, // plain text body
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Referral Email Sent</h2>
        <p>Hi ${referrerName},</p>
        <p>You have successfully referred <strong>${refereeName}</strong> for the <strong>${courseName}</strong> course.</p>
        <p>Thank you for helping us grow!</p>
        <br />
        <p>Best,</p>
        <p>The accredian Team</p>
      </div>
    `,
    });

    return {
      success: true,
      message: "Referral email sent successfully",
    };
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: `Incorrect Email passed: ${error}`,
      },
      { status: 402 }
    );
  }
}
