#!/usr/bin/env node
import { getArgs } from './helpers/args.js'

const initCLI = () => {
    // console.log('start');
    // console.log(process.argv);
    const args = getArgs(process.argv);
    console.log(args);
}

initCLI();