/* 1 задача "Линейные алгоритмы" */

export function multiplyAndSum(a, b) {
	const product = a * b;
	const sum = a + b;
  
	window.console.log("Product:", product);
	window.console.log("Sum:", sum);
}

export function countTotalCharacters(str1, str2) {
	const totalCharacters = str1.length + str2.length;
	window.console.log("Total Characters:", totalCharacters);
}

export function sumOfDigits() {
	// eslint-disable-next-line no-alert
	const number = prompt("Введите трехзначное число:");
  
	if (number.length !== 3) {
		window.console.log("Вы ввели неверное число!");
		return;
	}
  
	const digit1 = Number(number.charAt(0));
	const digit2 = Number(number.charAt(1));
	const digit3 = Number(number.charAt(2));
  
	const sum = digit1 + digit2 + digit3;
  
	window.console.log("Сумма цифр введенного числа:", sum);
}


// 2 задача "Условия" 

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

export function checkCircleInSquare(circle, square) {
	if (circle <= square) {
		return "Круг поместится в квадрате";
	} 
	return "Круг не поместится в квадрате";
    
};

// Задача 3 "Циклы"

export function calculateSum() {
	let sum = 0;
	for (let i = 50; i <= 100; i++) {
		sum += i;
	}
	window.console.log(sum);
}

export function printMultiplicationTable() {
	for (let i = 1; i <= 10; i++) {
		window.console.log(`${i  } x 7 = ${  i * 7}`);
	}
}

export function sumOddNumbers() {
	// eslint-disable-next-line no-alert
	const n = +prompt("Введите число N");
	let sum = 0;
  
	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			sum += i;
		}
	}
  
	window.console.log(`Сумма всех нечётных чисел от 1 до ${n} равна ${sum}`);
}


/* 10. Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user */

export function getUserAge() {
	const user = {};
	// eslint-disable-next-line no-alert
	user.age = +prompt("Введите число");
  
	return user.age;
}

/* 11 Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
'admin'. */

export function createAdminUser() {
	const user = {}
	const admin = { ...user};
	admin.role = "admin";
	return admin;
}

/* 12. Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей. */

export function printAdminDetails(admin) {
	const { name: adminName, age: adminAge, role: adminRole } = admin;
	window.console.log(adminName, adminAge, adminRole);
}

/* 13 Создайте массив целых чисел из 10 элементов.
Выведите в консоль сумму всех элементов массива. */

export function ArraySum() {
	let sum = 0;
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	window.console.log(sum);
}

/* 14. Создайте новый массив, на основе исходного, в котором каждый элемент будет вдвое больше
 элемента исходного массива с таким же индексом. (a[1] = 3, b[1] = 6, где a – исходный массив, b – новый массив). */

export function multiplyByTwo(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result[i] = arr[i] * 2;
	}
	return result;
}

/* 15. Найдите и выведите в консоль наибольший и наименьший элемент исходного массива. */

export function findMinMax(arr) {
	let min = arr[0];
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	window.console.log(min, max);;
};