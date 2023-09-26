// Задача 6 "Функции"

export function diff(a, b) {
	return Math.abs(a - b);
}

export function isWord(str) {
	// Проверяем, есть ли в строке пробелы
	if (str.includes(" ")) {
		return false;
	} 
	return true;
}

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

// 7. Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным 

export function isRightTriangle(a, b, c) {
	// Проверяем теорему Пифагора: квадрат гипотенузы равен сумме квадратов катетов треугольника.
	if (
		a**2 === b**2 + c**2 ||
      b**2 === a**2 + c**2 ||
      c**2 === a**2 + b**2
	) {
		return true;
	} 
	return false; 
}

/* 8. Пользователь вводит число R. Написать программу, которая выведет 
в консоль длину окружности и площадь круга с радиусом R. */

export function calculateCircleInfo(radius) {
	const circumference = 2 * Math.PI * radius;
	const area = Math.PI * radius * radius;
  
	return window.console.log(
		`Длина окружности: ${Math.round(circumference)} Площадь круга: ${Math.round(
			area,
		)}`,
	);
}

/* 9. Пользователь вводит числа a, b и c. Написать
  программу, выводящую корни квадратного
  уравнения с коэффициентами a, b и c. */

export function findDicriminant(a, b, c) {
	const discriminant = b * b - 4 * a * c;
	if (discriminant > 0) {
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		window.console.log(`Корни квадратного уравнения: x1 = ${x1}, x2 = ${x2}`);
	} else if (discriminant === 0) {
		const x = -b / (2 * a);
		window.console.log(`Корень квадратного уравнения: x = ${x}`);
	} else {
		window.console.log(`Уравнение не имеет действительных корней`);
	}
}

/* 10. Пользователь вводит текстовую строку. Определить с
  помощью регулярного выражения, является ли
  введённая строка:
  1.Датой.
  2.Адресом электронной почты.
  3.*Номером телефона. */

export function checkString(input) {
	const regex =
  // eslint-disable-next-line max-len
  /^\d{1,2}\/\d{1,2}\/\d{4}$|^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$|^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/;
  
	if (regex.test(input)) {
		if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(input)) {
			return "Это дата";
		} if (/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(input)) {
			return "Это электронная почта";
		} if (/^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/.test(input)) {
			return "Это номер телефона";
		}
	}
  
	return "Это не дата, не электронная почта, не номер телефона";
}