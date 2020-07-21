import { PaginationError } from "../error";
import cloudinary from "cloudinary";

import { CLOUD_NAME, API_KEY, API_SECRET } from "../utils/constants";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

export const getStatistics = async (page = 50) => {
  try {
    if (page <= 0 || page > 50) throw new PaginationError();

    const { resources } = await cloudinary.v2.search
      .expression("")
      .max_results(page)
      .execute();

    if (resources.length === 0) throw new EmptyResourceError();

    const statistics = resources.reduce(
      (acc, value) => {
        acc.totalImages++;

        if (!acc.formats[value.format]) acc.formats[value.format] = 1;
        else acc.formats[value.format]++;

        if (acc.biggestPicture.weight < value.bytes)
          acc.biggestPicture = { weight: value.bytes, url: value.url };

        if (acc.smallestPicture.weight > value.bytes)
          acc.smallestPicture = { weight: value.bytes, url: value.url };

        acc.avgSize += value.bytes;

        return acc;
      },
      {
        totalImages: 0,
        formats: {},
        biggestPicture: {
          weight: 0,
          url: "",
        },
        smallestPicture: {
          weight: 100000000,
          url: "",
        },
        avgSize: 0,
      }
    );

    statistics.avgSize = statistics.avgSize / statistics.totalImages;

    return statistics;
  } catch (error) {
    throw error;
  }
};

export const getCSV = () => {};
