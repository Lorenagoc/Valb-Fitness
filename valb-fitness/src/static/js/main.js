import { Secretaria } from "./Secretaria.js";
import { Professor } from "./Professor.js";
import { Medico } from "./Medico.js";
import { Aluno } from "./Aluno.js";
import { AvaliacaoFisica } from "./AvaliacaoFisica.js";
import { Treino } from "./Treino.js";
import { Exercicio } from "./Exercicio.js";
import { Modalidade } from "./Modalidade.js";
import { Turma } from "./Turma.js";
import { Plano } from "./Plano.js";
import { Cartao } from "./Cartao.js";

const secretaria1 = new Secretaria(11, "123456", "Bianca Silva");
const medico1 = new Medico(21, "456789", "Alonso da Fonseca", "789.789.789");
const professor1 = new Professor(31, "987654", "Clarice Lispector", "654.654.654");
const aluno1 = new Aluno("Ivete Sangalo", "123.456.789-02", "02/02/1970", "789.777.5", 41, "abcdef", "Hipertrofia Muscular");

const avaliacao1 = new AvaliacaoFisica("Avaliação da Ivete Sangalo", medico1, aluno1, "20/05/2022", 60, 1.75, "10/8", 0.3, 0.7);

console.log(`O IMC de ${aluno1.nomeCompleto} é ${avaliacao1.calcularIMC(avaliacao1.peso, avaliacao1.altura)}`);