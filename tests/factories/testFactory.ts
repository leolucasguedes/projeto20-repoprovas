import { faker } from "@faker-js/faker"

const createNewTest = () => {
	return {
		name: faker.name.findName(),
		pdfUrl: faker.internet.url(),
		categoryId: 1,
		disciplineId: 1,
		teacherId: 1
	}
}

export { createNewTest }