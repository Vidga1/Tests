export function getUserAge() {
	const user = {};
	// eslint-disable-next-line no-alert
	user.age = +prompt("Введите число");
  
	return user.age;
}