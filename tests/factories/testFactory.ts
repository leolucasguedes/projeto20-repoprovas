import { faker } from "@faker-js/faker"
import supertest from "supertest"
import app from "../../src/app/app"

const createNewTest = () => {
	return {
		name: faker.name.findName(),
		pdfUrl: faker.internet.url(),
		categoryId: 1,
		disciplineId: 1,
		teacherId: 1
	}
}

async function generateTest(token: string) {
    const test = createNewTest();
    await supertest(app)
	.post("/tests")
	.set("authorization", `Bearer ${token}`)
	.send(test)
	return test;
}

export { createNewTest, generateTest }