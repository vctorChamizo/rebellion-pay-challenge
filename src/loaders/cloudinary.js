import cloudinary from "cloudinary";

import { CLOUD_NAME, API_KEY, API_SECRET } from "../utils/constants";

console.log(CLOUD_NAME);

export const CloudinaryConfig = cloudinary.config({
  cloud_name: "dbnuvqzms",
  api_key: "469833719843844",
  api_secret: "taehOwTLrO0WU02HBqFPQpo8YoE",
});
