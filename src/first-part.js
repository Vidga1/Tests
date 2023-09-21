/* 1.В переменных a и b хранятся числа. Написать          
программу, которая выводит в консоль произведение
и сумму этих чисел. */

export function multiplyAndSum(a, b) {
	const product = a * b;
	const sum = a + b;
  
	window.console.log("Product:", product);
	window.console.log("Sum:", sum);
}

/* 2. В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обоих строках */

export function countTotalCharacters(str1, str2) {
	const totalCharacters = str1.length + str2.length;
	window.console.log("Total Characters:", totalCharacters);
}

/* 3. Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа */

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

/* 4. В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них. */

export function findMax(a, b) {
	if (a > b) {
		window.console.log(a);
	} else {
		window.console.log(b);
	}
}

/* 5. Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее этому 
числу (1 — январь, 2 — февраль и т.д.). */
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

/* 6. В переменных circle и square хранятся площади круга и квадрата соответственно.
  Написать программу, которая определяет, поместится ли круг в квадрат. */

export function checkCircleInSquare(circle, square) {
	if (circle <= square) {
		return "Круг поместится в квадрате";
	} 
	return "Круг не поместится в квадрате";
    
};

// 7. Вывести в консоль сумму всех целых чисел от 50 до 100 
export function calculateSum() {
	let sum = 0;
	for (let i = 50; i <= 100; i++) {
		sum += i;
	}
	window.console.log(sum);
}

// 8. Вывести в консоль таблицу умножения на 7
export function printMultiplicationTable() {
	for (let i = 1; i <= 10; i++) {
		window.console.log(`${i  } x 7 = ${  i * 7}`);
	}
}