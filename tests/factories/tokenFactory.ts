import app from "../../src/app/app"
import { CreateUserData } from "../../src/schemas/authSchema"
import supertest from "supertest"

const getToken = async (user: CreateUserData) => {
	const response = await supertest(app).post("/signin").send(user)
	return response.body.token
}

export { getToken }