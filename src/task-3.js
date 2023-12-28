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