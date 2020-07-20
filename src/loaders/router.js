import * as routes from "../router";
import { API_URL } from "../utils/constants";

export const router = (app) => {
  Object.values(routes).forEach((router) => {
    console.log(API_URL + router.path);
    app.use(API_URL + router.path, router.router);
  });
};
