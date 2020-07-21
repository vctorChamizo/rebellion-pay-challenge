import { getStatistics, getCSV } from "../service";

export const GetStatistics = async (req, res, next) => {
  try {
    const { page } = req.query;

    const response = await getStatistics(page);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const GetCSV = async (req, res, next) => {
  try {
    const { page } = req.query;

    const response = await getCSV(page);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
