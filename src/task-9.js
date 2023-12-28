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

export function calculateCircleInfo(radius) {
	const circumference = 2 * Math.PI * radius;
	const area = Math.PI * radius * radius;
  
	return window.console.log(
		`Длина окружности: ${Math.round(circumference)} Площадь круга: ${Math.round(
			area,
		)}`,
	);
}

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