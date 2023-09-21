/* 1.Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим. */

export function diff(a, b) {
	return Math.abs(a - b);
}

/* 2. Напишите функцию isWord, которая принимает на
  вход текстовую строку. Функция возвращает true, если строка состоит 
  из одного слова и false, если из нескольких.  */

export function isWord(str) {
	// Проверяем, есть ли в строке пробелы
	if (str.includes(" ")) {
		return false;
	} 
	return true;
}

/* 3. Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x. */

export function pow(a, x) {
	return a**x;
}

/* 4. Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате. */

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

/* 5. Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня */

export function MinPass() {
	const now = new Date();
	const hrs = now.getHours();
	const mins = now.getMinutes();
	const minutesPassed = hrs * 60 + mins;
	return minutesPassed
}

/* 6. В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя. */

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