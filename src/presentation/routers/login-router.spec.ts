import { describe, expect, it } from "vitest";
import { LoginRouter } from "./LoginRouter.js";

describe("Login Router", () => {
	// Test cases will be added here in the future
	it("should return 400 if no email is provided", () => {
		// sut stands for "system under test"
		const sut = new LoginRouter();
		const httpRequest = {
			body: {
				password: "any_password",
			},
		};
		const httpResponse = sut.route(httpRequest);
		expect(httpResponse.statusCode).toBe(400);
		expect(httpResponse.body).toEqual({ error: "Missing param: email" });
	});

	it("should return 400 if no password is provided", () => {
		// sut stands for "system under test"
		const sut = new LoginRouter();
		const httpRequest = {
			body: {
				email: "any_email@mail.com",
			},
		};
		const httpResponse = sut.route(httpRequest);
		expect(httpResponse.statusCode).toBe(400);
		expect(httpResponse.body).toEqual({ error: "Missing param: password" });
	});
});
