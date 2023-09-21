/* 1.В переменных a и b хранятся числа. Написать          
программу, которая выводит в консоль произведение
и сумму этих чисел. */

export function multiplyAndSum(a, b) {
	const product = a * b;
	const sum = a + b;
  
	window.console.log("Product:", product);
	window.console.log("Sum:", sum);
}