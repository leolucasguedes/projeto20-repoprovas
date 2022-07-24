import { faker } from "@faker-js/faker"

const newUser = () => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	}
}

const newUserWithoutField = () => {
	return {
		email: faker.internet.email(),
	}
}

const alreadyRegisteredUser = () => {
	return {
		email: "leo@driven.com",
		password: faker.internet.password(),
	}
}

const alreadyRegisteredData = () => {
	return {
		email: "leo@driven.com",
		password: "123456",
	}
}

const wrongPassword = () => {
	return {
		email: "leo@driven.com",
		password: "a123456",
	}
}

const wrongEmail = () => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	}
}

const dataWhithoutField = () => {
	return {
		email: "leo@driven.com",
	}
}

export {
	newUser,
	newUserWithoutField,
	alreadyRegisteredUser,
	alreadyRegisteredData,
	wrongPassword,
	wrongEmail,
	dataWhithoutField,
}