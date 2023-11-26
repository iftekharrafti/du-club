import { EncodeToken } from "@/helper/tokenHelper";
import UserModel from "@/models/UserModel";
import dbConnect from "@/utils/mongo";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect()
  

    let phone = req.query.phone;
    let user_id;

    if(method === 'GET') {
      let code = Math.floor(Math.random() * 1000) + 900;
      console.log(phone, code)

      try {
        await UserModel.updateOne(
          { phone: phone },
          {
            $set: {
              otp: code,
            },
          },
          {
            upsert: true,
          }
        );
    
        res.status(200).json({ status: "Success",
        message: "OTP Send successful" })
      } catch (err) {
        res.status(200).json({ status: "error",
        message: "Something Went Wrong", err: err })
      }
    }

    // Verify User
    if(method === 'GET') {
      try {
      let phone = req.query.phone;
      if (code === "0") {
        res.status(200).json({ status: "error",
        message: "Invalid OTP", err: err })
      } else {
        const count = await UserModel.find({ phone: phone, otp: code }).count("total");
        if(count === 1){
          user_id = await UserModel.findOne({ phone: phone }).select("_id");
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
          return {
            status: "Success",
            message: "Verify Successful",
            token: token,
          };

        }
      }
      
      } catch (err) {
        res.status(200).json({ status: "error",
        message: "Something Went Wrong", err: err })
      }
    }

    if(method === 'POST') {
        
    }
  }
