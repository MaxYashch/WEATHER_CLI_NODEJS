#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather, getIcon } from './services/api_service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log_service.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from './services/storage_service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token has not been established');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token saved');
    } catch (error) {
        printError(error.message);
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('City has not been established');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City saved');
    } catch (error) {
        printError(error.message);
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (e) {
        if (e?.responce?.status == 404) {
            printError('Check city name');
        } else if (e?.responce?.status == 401) {
            printError('Check token');
        } else {
            printError(e.message);
        }
    }    
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    return getForecast();
}

initCLI();