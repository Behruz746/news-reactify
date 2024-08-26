import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async ({
  page__number = 1,
  page__size = 10,
  category,
  keywords,
  language = "english",
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page__number,
        page__size,
        language,
        category,
        keywords,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
