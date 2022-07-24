import app from "../src/app/app.js"
import supertest from "supertest"
import {
	alreadyRegisteredData,
	alreadyRegisteredUser,
	dataWhithoutField,
	newUser,
	newUserWithoutField,
	wrongEmail,
	wrongPassword,
} from "./factories/userFactory"

describe("SignUp", () => {
	it("Create user and return status code 201", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(newUser())
		expect(response.status).toEqual(201)
	})
	it("Try to create user with some field missing and return 422", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(newUserWithoutField())
		expect(response.status).toEqual(422)
	})
	it("Try create user with already existing email and return 409", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(alreadyRegisteredUser())
		expect(response.status).toEqual(409)
	})
})

describe("SignIn", () => {
	it("Sign in with valid credentials and return token and status code 200", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(alreadyRegisteredData())
		expect(response.status).toEqual(200)
		expect(response.body.token).toBeDefined()
	})
	it("Sign in with wrong password and return status code 401", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(wrongPassword())
		expect(response.status).toEqual(401)
	})
	it("Sign in with wrong email and return status code 404", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(wrongEmail())
		expect(response.status).toEqual(404)
	})
	it("Sign in with credentials without fields and return status code 422", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(dataWhithoutField())
		expect(response.status).toEqual(422)
	})
})