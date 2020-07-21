require("dotenv").config({ path: __dirname + "/../.env" });

// Enviroment
export const PORT = process.env.PORT || "3000";
export const API_URL = "/rebellion-test/";

// Cloudinary
export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
export const CLOUDINARY_URL = `cloudinary://${API_KEY}:${API_SECRET}@${CLOUD_NAME}`;

// Error Messages
export const BAD_RANGE_PAGINATION = "Page out of range";
export const EMPTY_RESOURCES = "Response resources are empty";
