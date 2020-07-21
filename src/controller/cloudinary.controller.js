import { getStatistics, getCSV } from "../service";

export const GetStatistics = (req, res, next) => {
  try {
    const { page } = req.query;

    const response = getStatistics(page);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const GetCSV = (req, res, next) => {
  try {
    const response = getCSV();

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
