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

export function printAdminDetails(admin) {
	const { name: adminName, age: adminAge, role: adminRole } = admin;
	window.console.log(adminName, adminAge, adminRole);
}