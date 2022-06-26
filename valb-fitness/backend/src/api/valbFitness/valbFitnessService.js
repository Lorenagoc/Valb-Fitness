const ValbFitness = require("./valbFitness");

ValbFitness.methods(["get", "post", "put", "delete"]);
ValbFitness.updateOptions({ new: true, runValidators: true });

// Serviços

// Obtém a quantidade de elementos
ValbFitness.route("count", (req, res, next) => {
	ValbFitness.count((error, value) => {
		if (error) {
			res.status(500).json({ errors: [error] });
		} else {
			res.json({ value });
		}
	});
});

module.exports = ValbFitness;
