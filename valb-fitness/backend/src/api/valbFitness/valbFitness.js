const restful = require("node-restful");
const mongoose = restful.mongoose;

const clientSchema = new mongoose.Schema({
	nomeCompleto: { type: String, required: true },
	cpf: { type: Number, required: true },
	dataNascimento: { type: Date, required: true },
	identidade: { type: Number, required: true },
	objetivo: { type: String, required: true },
	aptoFisicamente: { type: Boolean, required: false },
});
const secretarySchema = new mongoose.Schema({
	nomeCompleto: { type: String, required: true },
});
const doctorSchema = new mongoose.Schema({
	nomeCompleto: { type: String, required: true },
	crm: { type: Number, required: true },
});
const teacherSchema = new mongoose.Schema({
	nomeCompleto: { type: String, required: true },
	cref: { type: Number, required: true },
});

const valbFitness = new mongoose.Schema({
	clients: [clientSchema],
	secretaries: [secretarySchema],
	doctors: [doctorSchema],
	teachers: [teacherSchema],
});

module.exports = restful.model("ValbFitness", valbFitness);
