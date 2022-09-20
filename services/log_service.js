import chalk  from 'chalk';

export const printError = (error) => {
    console.log(chalk.red(' ERROR ') + ' ' + error);    
}

export const printSuccess = (msg) => {
    console.log(chalk.green(' SUCCESS ') + ' ' + msg);    
}

export const printHelp = () => {
    console.log(`${chalk.cyan(' HELP ')}
Noparametrs - display weather
-s [CITY] for setting city
-h for display help
-t [API_KEY] for saving token`);    
}