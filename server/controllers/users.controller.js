import sendEmail from "../config/sendEmail.js";
import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { urlencoded } from "express";
export async function getUserById(request, response) {
    try {
        const {name, email, password} = request.body;
        if (!name || !email || !password) {
            return response.status(400).json({ message: "Name, email, and password are required", error: true, success: false });
        }

        const user = await UserModel.findOne({ email: email });

        if (user) {
            return response.status(400).json({ message: "User already exists", error: true, success: false });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const payload = {
            name: name,
            email: email,
            password: hashedPassword,
        };

        const newUser = await UserModel.create(payload);
        const save = await newUser.save();

        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify?email=${save._id}`;

        const varificationemail = await sendEmail({
            sendTo : email,
            subject: "Welcome to KwiK",
            html: verifyEmailTemplate(name, VerifyEmailUrl),
        });

        return response.status(201).json({
            message: "User created successfully",
            error: false,
            success: true,
        });
    } catch (error) {
        return response.status(500).json({ message: "Internal server error", error: true, success: false });
    }
}
