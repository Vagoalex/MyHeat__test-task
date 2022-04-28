export function updateGaugeValue(element, value) {
	const gauge = element.querySelector('.gauge');
	const updateValue = +(value / 100);
	if (updateValue < 0 || updateValue > 1) {
		return;
	}

	gauge.querySelector('.gauge__fill').style.transform = `rotate(${updateValue / 2}turn)`;
	gauge.querySelector('.gauge__cover').textContent = `${(updateValue * 100).toFixed(1)}%`;
}

export function setGaugeValue(gauge, value) {
	const fixedValue = +(value / 100).toFixed(1);
	if (fixedValue < 0 || fixedValue > 1) {
		return;
	}

	gauge.querySelector('.gauge__fill').style.transform = `rotate(${fixedValue / 2}turn)`;
	gauge.querySelector('.gauge__cover').textContent = `${fixedValue}%`;
}
