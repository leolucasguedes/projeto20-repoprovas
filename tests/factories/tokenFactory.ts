import app from "../../src/app/app"
import supertest from "supertest"
import { generateUserRegistered } from "./userFactory"

const getToken = async () => {
	const user = await generateUserRegistered();
	const response = await supertest(app).post("/signin").send(user)
	return response.body.token
}

export { getToken }