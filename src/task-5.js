export function ArraySum() {
	let sum = 0;
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	window.console.log(sum);
}