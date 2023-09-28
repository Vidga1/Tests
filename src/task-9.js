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