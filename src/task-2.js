export function findMax(a, b) {
	if (a > b) {
		window.console.log(a);
	} else {
		window.console.log(b);
	}
}

export function getMonthName() {
	const monthNumber = Number(prompt("Введите число от 1 до 12:"));
	switch (monthNumber) {
	case 1:
		window.console.log('Январь');
		break;
	case 2:
		window.console.log('Февраль');
		break;
	case 3:
		window.console.log('Март');
		break;
	case 4:
		window.console.log('Апрель');
		break;
	case 5:
		window.console.log('Май');
		break;
	case 6:
		window.console.log('Июнь');
		break;
	case 7:
		window.console.log('Июль');
		break;
	case 8:
		window.console.log('Август');
		break;
	case 9:
		window.console.log('Сентябрь');
		break;
	case 10:
		window.console.log('Октябрь');
		break;
	case 11:
		window.console.log('Ноябрь');
		break;
	case 12:
		window.console.log('Декабрь');
		break;
	default:
		window.console.log('Некорректное число');
		break;
	}
}