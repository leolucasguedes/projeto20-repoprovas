import app from "../../src/app/app.js"
import { CreateUserData } from "../../src/schemas/authSchema.js"
import supertest from "supertest"

const getToken = async (user: CreateUserData) => {
	const response = await supertest(app).post("/signin").send(user)
	return response.body.token
}

export { getToken }