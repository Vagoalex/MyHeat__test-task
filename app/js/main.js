import { UI } from './UI.js';
import { setRequest, getCurrentDate, sortedData } from './helpers.js';
import { createElements, updateElements, deleteElements } from './content.js';

async function startApp() {
	const data = await setRequest(UI.API);
	console.log();
	createElements(data.data);

	// info in console.log();
	console.group('App was created.');
	getCurrentDate();
	console.log(data.data);
	sortedData(data.data);
	console.groupEnd();
}

startApp();

setInterval(async function () {
	const dataInterval = await setRequest(UI.API);
	console.log(dataInterval.new);

	if (dataInterval.new) {
		deleteElements();
		startApp();
		console.log('App elements in content was deleted');
	} else {
		updateElements(dataInterval.data);

		// info in console.log();
		console.group('App was updated');
		getCurrentDate();
		console.log(dataInterval.data);
		sortedData(dataInterval.data);
		console.groupEnd();
	}
}, 15000);
