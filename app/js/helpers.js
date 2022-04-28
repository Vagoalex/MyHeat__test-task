export async function setRequest(api) {
	try {
		const response = await fetch(api);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
}

export function sortedData(data) {
	const sortedArray = data.sort(function (a, b) {
		return a.id - b.id;
	});
	console.log(sortedArray);
}

export function getCurrentDate() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();

	const hour = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	let fMonth = '';
	switch (month) {
		case 0:
			fMonth = 'января';
			break;
		case 1:
			fMonth = 'февраля';
			break;
		case 2:
			fMonth = 'марта';
			break;
		case 3:
			fMonth = 'апреля';
			break;
		case 4:
			fMonth = 'мае';
			break;
		case 5:
			fMonth = 'июня';
			break;
		case 6:
			fMonth = 'июля';
			break;
		case 7:
			fMonth = 'августа';
			break;
		case 8:
			fMonth = 'сентября';
			break;
		case 9:
			fMonth = 'октября';
			break;
		case 10:
			fMonth = 'ноября';
			break;
		case 11:
			fMonth = 'декабря';
			break;
	}

	console.log(day + ' ' + fMonth + ' ' + year + ' года');

	if (hour < 10) {
		console.log(`Текущее время: 0${hour}:${minutes}:${seconds}`);
	} else if (minutes < 10) {
		console.log(`Текущее время: ${hour}:0${minutes}:${seconds}`);
	} else if (seconds < 10) {
		console.log(`Текущее время: ${hour}:${minutes}:0${seconds}`);
	}
}
