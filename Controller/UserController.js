import prisma from "../DB/db.config.js";
import { receiveReferralConfirmation } from "../Middleware/email/receiveReferralConfirmation.js";
import { sentReferralConfirmation } from "../Middleware/email/sentReferralConfirmation.js";

export const createReferral = async (req, res) => {
  try {
    const {
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      courseName,
      message,
    } = req.body;

    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        courseName,
        message,
      },
    });

    if (!referral) {
      return res.json({
        status: 401,
        message: "Some error occured while referring",
      });
    }
    const emailResponse = await sentReferralConfirmation({
      referrerName,
      referrerEmail,
      refereeName,
      courseName,
    });

    const emailReferredResponse = await receiveReferralConfirmation({
      referrerName,
      refereeName,
      courseName,
      refereeEmail,
      message
    });

    if (!emailResponse.success || !emailReferredResponse.success) {
      return res.json(
        { success: false, message: emailResponse.message },
        { status: 500 }
      );
    }
    return res.json({
      status: 200,
      data: referral,
      message: "User has been referred",
    });
  } catch (error) {
    console.error(error);
    return res.json({ status: 500, message: "Internal Error occured..." });
  }
};
