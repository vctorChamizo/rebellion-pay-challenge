import { PaginationError } from "../error";
import { getCloudinaryResources } from "../loaders";
import { createObjectCsvWriter } from "csv-writer";

import { CSV_DATA_URL } from "../utils/constants";

export const getStatistics = async (page = 50) => {
  try {
    if (page <= 0 || page > 50) throw new PaginationError();

    const { resources } = await getCloudinaryResources(page);

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

export const getCSV = async (page = 50) => {
  try {
    if (page <= 0 || page > 50) throw new PaginationError();

    const { resources } = await getCloudinaryResources(page);

    if (resources.length === 0) throw new EmptyResourceError();

    const headerKeys = Object.keys(resources[0]);
    const header = headerKeys.map((element) => {
      return { id: element, title: element };
    });

    const csvWriter = createObjectCsvWriter({
      path: CSV_DATA_URL,
      header: header,
    });

    // const data = resources.map((element) => {
    //   const dataKeys = Object.keys(element);
    //   const dataUnit = {};

    //   dataKeys.map((key) => (dataUnit[key] = element[key]));

    //   return dataUnit;
    // });

    await csvWriter.writeRecords(resources);

    return `The CSV has been created succesfful in path: ${CSV_DATA_URL}`;
  } catch (error) {
    throw error;
  }
};
