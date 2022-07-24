import app from "../src/app/app.js"
import supertest from "supertest"
import { createNewTest } from "./factories/testFactory"
import { getToken } from "./factories/tokenFactory"
import { alreadyRegisteredData } from "./factories/userFactory"

let token: string

beforeAll(async () => (token = await getToken(alreadyRegisteredData())))

describe("Create Test", () => {
	it("Create test and return test data and status code 201", async () => {
		const testData = createNewTest()
		const response = await supertest(app)
			.post("/tests")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(201)
		expect(response.body.name).toEqual(testData.name)
		expect(response.body.pdfUrl).toEqual(testData.pdfUrl)
	})
	it("Create test with some field missing and return status code 422", async () => {
		const testData = createNewTest()
		delete testData.name
		const response = await supertest(app)
			.post("/tests")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(422)
	})
	it("Create test with invalid token and return status code 401", async () => {
		const testData = createNewTest()
		const response = await supertest(app)
			.post("/tests")
			.set("Authorization", "Bearer invalidToken")
			.send(testData)
		expect(response.status).toEqual(401)
	})
	it("Create test with invalid teacher and return status code 404", async () => {
		const testData = createNewTest()
		testData.teacher = "invalid"
		const response = await supertest(app)
			.post("/tests")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(404)
	})
	it("Create test with invalid category and return status code 404", async () => {
		const testData = createNewTest()
		testData.category = "invalid"
		const response = await supertest(app)
			.post("/tests")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(404)
	})
	it("Create test with invalid discipline and return status code 404", async () => {
		const testData = createNewTest()
		testData.discipline = "invalid"
		const response = await supertest(app)
			.post("/tests")
			.set("Authorization", `Bearer ${token}`)
			.send(testData)
		expect(response.status).toEqual(404)
	})
})

describe("Get tests", () => {
	it("Get tests by disciplines and return status code 200", async () => {
		const response = await supertest(app)
			.get("/testsByDiscipline")
			.set("Authorization", `Bearer ${token}`)
		expect(response.status).toEqual(200)
		expect(response.body.tests.length).toBeGreaterThan(0)
	})
	it("Get tests by teachers and return status code 200", async () => {
		const response = await supertest(app)
			.get("/testsByTeacher")
			.set("Authorization", `Bearer ${token}`)
		expect(response.status).toEqual(200)
		expect(response.body.tests.length).toBeGreaterThan(0)
	})
	it("Get tests with invalid token and return status code 401", async () => {
		const response = await supertest(app)
			.get("/testsByDiscipline")
			.set("Authorization", "Bearer invalidToken")
		expect(response.status).toEqual(401)
	})
})

