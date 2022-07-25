import prisma from "../src/config/database"
import app from "../src/app/app"
import supertest from "supertest"
import * as UF from "./factories/userFactory"

describe("SignUp", () => {
	afterAll(async () => {
		await prisma.$executeRaw`TRUNCATE TABLE users`
		await prisma.$disconnect();
	  });
	it("Create user and return status code 201", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(UF.newUser())
		expect(response.status).toBe(201)
	})
	it("Try to create user with some field missing and return 422", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(UF.newUserWithoutFields())
		expect(response.status).toBe(422)
	})
	it("Try create user with already existing email and return 409", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(UF.alreadyRegisteredUser())
		expect(response.status).toBe(409)
	})
})

describe("SignIn", () => {
	it("Sign in with valid credentials and return token and status code 200", async () => {
		const user = await UF.generateUserRegistered()
		const response = await supertest(app)
			.post("/signin")
			.send(user)
		expect(response.status).toBe(200)
		expect(response.body.token).toBeDefined()
	})
	it("Sign in with wrong password and return status code 401", async () => {
		const user = await UF.generateUserRegistered()
		user.password = "123456789"
		const response = await supertest(app)
			.post("/signin")
			.send(user)
		expect(response.status).toBe(401)
	})
	it("Sign in with wrong email and return status code 404", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(UF.wrongEmail())
		expect(response.status).toBe(404)
	})
	it("Sign in with credentials without fields and return status code 422", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(UF.dataWhithoutField())
		expect(response.status).toBe(422)
	})
})