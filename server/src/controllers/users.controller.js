import jwt from "jsonwebtoken";
import sendEmail from "../config/sendEmail.js";
import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { urlencoded } from "express";
import verifyEmailTemplate from "../../utils/verifyEmailTemplate.js";
const { verify } = jwt;
export async function getUserById(request, response) {
    try {
        const {name, email, password, mobile } = request.body;
        if (!name || !email || !password || !mobile) {
            return response.status(400).json({ message: "Name, email, password, and mobile are required", error: true, success: false });
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
            mobile: mobile, // <-- Add this line
        };

        const newUser = await UserModel(payload);
        const save = await newUser.save();

        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify?email=${save._id}`;

        const varificationemail = await sendEmail({
            to: email, // <-- Change sendTo to to
            subject: "Welcome to KwiK",
            html : verifyEmailTemplate(name, VerifyEmailUrl)
        });

        return response.status(201).json({
            message: "User created successfully",
            error: false,
            success: true,
        });
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        });
    }
}

export async function registerUser(request, response) {
    try {
        const {name, email, password, mobile } = request.body;
        if (!name || !email || !password || !mobile) {
            return response.status(400).json({ message: "Name, email, password, and mobile are required", error: true, success: false });
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
            mobile: mobile, // <-- Add this line
        };

        const newUser = await UserModel.create(payload);
        const save = await newUser.save();

        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify?email=${save._id}`
        const verifyEmail = await sendEmail({
            to: email,
            subject: "Welcome to KwiK",
            html: verifyEmailTemplate(name, VerifyEmailUrl) // <-- FIXED
        });

        return response.status(201).json({
            message: "User created successfully",
            error: false,
            success: true,
        });
    } catch (error) {
        console.error("Email send error:", error); // Add this line
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        });
    }
}

export async function verifyUser(request, response) {
    try {

        }
        catch (error) {
            return response.status(500).json({
                message : error.message || error,
                error : true,
                success : false
            });
        }
    }
