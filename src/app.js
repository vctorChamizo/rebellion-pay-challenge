import express from "express";
import bodyParser from "body-parser";
import * as loaders from "./loaders";
import logger from "./utils/log";

import { PORT } from "./utils/constants";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

loaders.router(app);

app.listen(PORT, () => {
  logger.info(`Running on port ${PORT}`);
});
