import { Router } from "express";
import { GetStatistics, GetCSV } from "../controller";

const router = Router();

router.get("/statistics", GetStatistics);

router.get("/csv", GetCSV);

export const CloudinaryAccount = { router: router, path: "cloudinary" };
