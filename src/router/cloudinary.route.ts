import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/statistics", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json("statistics");
  } catch (error) {
    next(error);
  }
});

router.get("/csv", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json("csv");
  } catch (error) {
    next(error);
  }
});

export const CloudinaryAccount = { router: router, path: "cloudinary" };
