import axios from "axios";

const Base_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(Base_URL + url, {
            headers: headers,
            params: params,
        })
        return data
    } catch (err) {
        console.log(err)
        return err
    }
}