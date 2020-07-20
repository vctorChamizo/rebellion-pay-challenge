import { Router } from "express";
import cloudinary from "cloudinary";
import { isEmpty } from "lodash";

import { CLOUD_NAME, API_KEY, API_SECRET } from "../utils/constants";

const router = Router();

cloudinary.config({
  cloud_name: "dbnuvqzms",
  api_key: "469833719843844",
  api_secret: "taehOwTLrO0WU02HBqFPQpo8YoE",
});

router.get("/statistics", async (req, res, next) => {
  try {
    const response = await cloudinary.v2.search.expression("").execute();

    const statistics = {
      totalImages: response.total_count,
      formats: response.resources.reduce((acc, value) => {
        const format = value.format;
        console.log(acc[format]);
        if (!acc[format]) {
          acc[format] = 1;
        } else acc[format]++;

        return acc;
      }, {}),
    };

    res.status(200).json(statistics);
  } catch (error) {
    console.log("Esto es el error", error);
    next(error);
  }
});

router.get("/csv", (req, res, next) => {
  try {
    res.status(200).json("csv");
  } catch (error) {
    next(error);
  }
});

export const CloudinaryAccount = { router: router, path: "cloudinary" };
