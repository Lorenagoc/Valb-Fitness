const express = require("express");

module.exports = function (server) {
	// Definir URL base para todas as rotas
	const router = express.Router();
	server.use("/api", router);

	// Rotas
	const ValbFitness = require("../api/valbFitness/valbFitnessService");
	ValbFitness.register(router, "/valbFitness");
};
