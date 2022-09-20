#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log_service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage_service.js';

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
    console.log(args);
    if (args.h) {
        printHelp();
    }
    // if (args.s) {
    //     // save city
    // }
    if (args.t) {
        saveToken(args.t);
    }
}

initCLI();