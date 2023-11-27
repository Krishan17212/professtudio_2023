import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_KEY = import.meta.env.VITE_APP_API_KEY;
const apiToken = import.meta.env.VITE_APP_API_TOKEN;
const TMDB_TOKEN = apiToken;


const headers = {
  Authorization: "bearer  " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    // const { data } = await axios.get(`${BASE_URL}${url}?api_key=${TMDB_KEY}`, {params: params});
    const {data} = await axios.get(BASE_URL + url, {headers, params});
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
