import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const DEFAULT_URL = import.meta.env.VITE_NEWS_BASE_DEFAULT_API_URL;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${DEFAULT_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${DEFAULT_URL}available/categories`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
