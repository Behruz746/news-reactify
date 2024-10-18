import axios from "axios";

const API_KEY = "aRmNmx5seswvSXnoLk_W6srEb_dd6AgLc6Ve4fk2dGseLJVy";
const BASE_URL = "https://api.currentsapi.services/v1/"

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
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

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
