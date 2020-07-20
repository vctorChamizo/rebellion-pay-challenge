import dotenv from "dotenv";
dotenv.config();

// Enviroment
export const PORT = process.env.PORT || "3000";
export const API_URL = "/rebellion-test/";

// Cloudinary
export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
export const CLOUDINARY_URL = `cloudinary://${API_KEY}:${API_SECRET}@${CLOUD_NAME}`;

// Error Messages
export const MISSING_ID = "No ID supplied";
export const MISSING_DATA = "Data request aren't provided";

// curl https://469833719843844:taehOwTLrO0WU02HBqFPQpo8YoE@api.cloudinary.com/v1_1/dbnuvqzms/metadata_fields/

// curl https://<API_KEY>:<API_SECRET>@api.cloudinary.com/v1_1/<CLOUD_NAME>/resources/image
