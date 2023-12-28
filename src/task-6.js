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