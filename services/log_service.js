import chalk  from 'chalk';
import dedent from 'dedent-js';

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

export const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.yellow(' WEATHER ')} City weather ${res.name}
		${icon}  ${res.weather[0].description}
		Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
		Water: ${res.main.humidity}%
		Wind speed: ${res.wind.speed}
		`
	);
};
