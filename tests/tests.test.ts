import prisma from "../src/config/database"
import app from "../src/app/app"
import supertest from "supertest"
import { createNewTest, generateTest } from "./factories/testFactory"
import { getToken } from "./factories/tokenFactory"

let token: string

beforeAll(async () => (token = await getToken()))

describe("Create Test", () => {
	it("Create test and return test data and status code 201", async () => {
		const testData = createNewTest()
		const response = await supertest(app)
			.post("/tests")
			.set("authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toBe(201)
	})
	it("Create test with some field missing and return status code 422", async () => {
		const testData = createNewTest()
		delete testData.name
		const response = await supertest(app)
			.post("/tests")
			.set("authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toBe(422)
	})
	it("Create test with invalid teacher and return status code 404", async () => {
		const testData = createNewTest()
		testData.teacherId = 0
		const response = await supertest(app)
			.post("/tests")
			.set("authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toBe(404)
	})
	it("Create test with invalid category and return status code 404", async () => {
		const testData = createNewTest()
		testData.categoryId = 0
		const response = await supertest(app)
			.post("/tests")
			.set("authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toBe(404)
	})
	it("Create test with invalid discipline and return status code 404", async () => {
		const testData = createNewTest()
		testData.disciplineId = 0
		const response = await supertest(app)
			.post("/tests")
			.set("authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toBe(404)
	})
	it("Create test with invalid token and return status code 401", async () => {
		const testData = createNewTest()
		const response = await supertest(app)
			.post("/tests")
			.set("authorization", "")
			.send(testData)
		expect(response.status).toBe(401)
	})
})

describe("Get tests", () => {
	it("Get tests by disciplines and return status code 200", async () => {
		await generateTest(token);
		const response = await supertest(app)
			.get("/testsByDiscipline")
			.set("authorization", `Bearer ${token}`)
		expect(response.status).toBe(200)
	})
	it("Get tests by teachers and return status code 200", async () => {
		await generateTest(token);
		const response = await supertest(app)
			.get("/testsByTeacher")
			.set("authorization", `Bearer ${token}`)
		expect(response.status).toBe(200)
	})
	it("Get tests with invalid token and return status code 401", async () => {
		await generateTest(token);
		const response = await supertest(app)
			.get("/testsByDiscipline")
			.set("authorization", "")
		expect(response.status).toBe(401)
	})
})
afterAll(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE tests`
	await prisma.$disconnect();
  });


