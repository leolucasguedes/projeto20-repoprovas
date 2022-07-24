import { faker } from "@faker-js/faker"

const createNewTest = () => {
	return {
		name: faker.name.findName(),
		pdfUrl: faker.internet.url(),
		category: "Projeto",
		teacher: "Diego Pinho",
		discipline: "HTML e CSS",
	}
}

export { createNewTest }