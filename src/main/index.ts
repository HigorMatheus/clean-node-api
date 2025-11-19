import fastify, { type FastifyRequest } from "fastify";

const app = fastify();

app.get(
	"/",
	async (
		request: FastifyRequest<{
			Querystring: { name?: string };
		}>,
	) => {
		return { hello: "world" };
	},
);

app.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`🔥 Server listening at ${address}`);
});
