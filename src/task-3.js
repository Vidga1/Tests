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