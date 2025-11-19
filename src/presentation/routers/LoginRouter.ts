export class LoginRouter {
	route(httpRequest: any): any {
		if (!httpRequest || !httpRequest.body) {
			return {
				statusCode: 500,
			};
		}

		if (!httpRequest.body.email) {
			return {
				statusCode: 400,
				body: { error: "Missing param: email" },
			};
		}
		if (!httpRequest.body.password) {
			return {
				statusCode: 400,
				body: { error: "Missing param: password" },
			};
		}
	}
}
