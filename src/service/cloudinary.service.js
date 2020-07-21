import { CloudinaryConfig } from "../loaders/cloudinary";

export const getStatistics = (page = 50) => {

  if (page < 0 || page > 50) throw new Error()

  const resources = await CloudinaryConfig.v2.search
      .expression("")
      .max_results(page)
      .execute();

      const statistics = {
        totalImages: response.total_count,
        formats: response.resources.reduce((acc, value) => {
          const format = value.format;
          if (!acc[format]) acc[format] = 1;
          else acc[format]++;
  
          return acc;
        }, {}),
      };
};

export const getCSV = () => {};
