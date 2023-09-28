export function getUserAge() {
	const user = {};
	// eslint-disable-next-line no-alert
	user.age = +prompt("Введите число");
  
	return user.age;
}

export function createAdminUser() {
	const user = {}
	const admin = { ...user};
	admin.role = "admin";
	return admin;
}