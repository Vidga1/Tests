export function getDayOfWeek() {
	const input = prompt("Введите дату в формате ДД.ММ.ГГГГ:");
	const [day, month, year] = input.split(".");
  
	const date = new Date(`${year}-${month}-${day}`);
  
	const daysOfWeek = [
		"Воскресенье",
		"Понедельник",
		"Вторник",
		"Среда",
		"Четверг",
		"Пятница",
		"Суббота",
	];
	return daysOfWeek[date.getDay()];
}