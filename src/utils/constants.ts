import dotenv from "dotenv";
dotenv.config();

// Enviroment
export const PORT = process.env.PORT || "3000";
export const API_URL = "/rebellion-test/";

// Cloudinary
export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;

// Error Messages
export const MISSING_ID = "No ID supplied";
export const MISSING_DATA = "Data request aren't provided";
