import { Application } from "express";
import * as routes from "../router";
import { IRouter } from "../interfaces/config";
import { API_URL } from "@constants";

export const router = (app: Application): void => {
  Object.values(routes).forEach((router: IRouter) =>
    app.use(API_URL + router.path, router.router)
  );
};
