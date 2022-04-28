import { UI } from './UI.js';
import { setRequest, getCurrentDate, sortedData } from './helpers.js';
import { createElements, updateElements, deleteElements } from './content.js';

async function startApp() {
	const data = await setRequest(UI.API);
	console.log();
	createElements(data.data);
	console.log('create');

	// info in console.log();
	getCurrentDate();
	console.log(data.data);
	sortedData(data.data);
}

startApp();

setInterval(async function () {
	const dataInterval = await setRequest(UI.API);
	console.log(dataInterval.new);

	if (dataInterval.new) {
		deleteElements();
		startApp();
		console.log('newcreate');
	} else {
		updateElements(dataInterval.data);
		console.log('update');

		// info in console.log();
		getCurrentDate();
		console.log(dataInterval.data);
		sortedData(dataInterval.data);
	}
}, 15000);
