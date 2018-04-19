import axios from 'axios';

const API_KEY = 'faebc48dd208018631655ea3ee910731';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    console.log('request is: ', request);
    return {
        type: FETCH_WEATHER,
        payload : request
    };
}