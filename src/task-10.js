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