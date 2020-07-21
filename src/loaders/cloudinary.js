import cloudinary from "cloudinary";
import { CLOUD_NAME, API_KEY, API_SECRET } from "../utils/constants";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

export const getCloudinaryResources = async (page) =>
  await cloudinary.v2.search.expression("").max_results(page).execute();
