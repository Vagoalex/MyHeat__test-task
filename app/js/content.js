import { UI } from './UI.js';
import { setGaugeValue, updateGaugeValue } from './gauge.js';

export function createElements(array) {
	return array.forEach(element => {
		createTemplate(element);
	});
}

export function deleteElements() {
	const content = document.querySelector('.content');
	[...content.children].forEach(element => {
		element.remove();
	});
}

export function updateElements(data) {
	const content = document.querySelectorAll('.content-item');

	const idElements = [...content].map(element => {
		return +element.id;
	});

	const dataElements = data.filter(({ id }) => idElements.includes(id));

	[...content].map(element => {
		dataElements.map(dataElement => {
			if (element.id == dataElement.id) {
				updateGaugeValue(element, dataElement.temperature);
			}
		});
	});
}

export function createTemplate(element) {
	const template = UI.TEMPLATE.content.cloneNode(true);
	template.querySelector('.content-item').id = element.id;
	template.querySelector('.content-item__title').textContent = element.name;
	const gauge = template.querySelector('.gauge');
	setGaugeValue(gauge, element.temperature);
	template.querySelector('.gauge__cover').textContent = `${element.temperature.toFixed(1)}%`;
	UI.CONTENT.append(template);
}
