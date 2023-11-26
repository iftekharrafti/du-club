import { EncodeToken } from "@/helper/tokenHelper";
import UserModel from "@/models/UserModel";
import dbConnect from "@/utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // Verify User
  if (method === "GET") {
    try {
      const { phone, code } = req.query;
      console.log(typeof code)
      if (code === "0") {
        return res.status(200).json({
          status: "error",
          message: "Invalid OTP",
          err: "Invalid OTP",
        });
      } else {
        const count = await UserModel.find({ phone: phone }).count(
          "total"
        );
        console.log(count)
        if (count === 1) {
          const user_id = await UserModel.findOne({ phone: phone }).select(
            "_id"
          );
          let token = EncodeToken(phone, user_id._id);
          await UserModel.updateOne(
            { phone: phone },
            {
              $set: {
                otp: 0,
              },
            },
            {
              upsert: true,
            }
          );

          return res.status(200).json({
            status: "Success",
            message: "Verify Successful",
            token: token,
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        status: "error",
        message: "Something Went Wrong",
        err: err.message,
      });
    }
  }

  if (method === "POST") {
    return res.status(200).json({
      status: "error",
      message: "Invalid method",
    });
  }
}
