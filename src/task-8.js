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

export function MinPass() {
	const now = new Date();
	const hrs = now.getHours();
	const mins = now.getMinutes();
	const minutesPassed = hrs * 60 + mins;
	return minutesPassed
}

export function compareBirthDates(date1, date2) {
	const [day1, month1, year1] = date1.split('.').map(Number);
	const [day2, month2, year2] = date2.split('.').map(Number);

	const total1 = day1 + month1 + year1;
	const total2 = day2 + month2 + year2;

	if (total1 === total2) {
		return "Оба пользователя родились в одинаковый день.";
	} if (total1 > total2) {
		return "Первый пользователь моложе второго.";
	} 
	return "Второй пользователь моложе первого.";  
}