#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api_service.js';
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

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        saveCity(args.s);
    }
    if (args.t) {
        saveToken(args.t);
    }
    return getForecast();
}

initCLI();