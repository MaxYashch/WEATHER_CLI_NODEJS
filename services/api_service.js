import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage_service.js";

export const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) throw new Error('API key has nat been settled, settle it with command -t [API_KEY]');

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    console.log(data);
    return data;
}