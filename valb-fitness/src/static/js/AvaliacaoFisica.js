import { Aluno } from "./Aluno";

export class AvaliacaoFisica {
    constructor(descricao, avaliador, paciente, data, peso, altura, pressaoArterial, percentualGordura, percentualMassa, imc) {
        this.descricao = descricao;
        this.avaliador = avaliador;
        this.paciente = paciente;
        this.data = data;
        this.peso = peso;
        this.altura = altura;
        this.pressaoArterial = pressaoArterial;
        this.percentualGordura = percentualGordura;
        this.percentualMassa = percentualMassa;
        this.imc = this.calcularIMC(peso, altura);
    }

    set paciente(paciente) {
        if (paciente instanceof Aluno) {
            this.paciente = paciente;
        }
    }

    get paciente() {
        return this.paciente;
    }

    set avaliador(avaliador) {
        if (avaliador instanceof Medico) {
            this.avaliador = avaliador;
        }
    }

    get avaliador() {
        return this.avaliador;
    }

    calcularIMC(peso, altura) {
        return peso / Math.pow(altura, 2);
    }

    classificarIMC(imc) {
        switch (imc) {
            case imc < 14.9: console.log("Extremamente abaixo do peso."); break;
            case imc >= 15 && imc <= 15.9: console.log("Gravemente abaixo do peso."); break;
            case imc >= 15 && imc <= 18.5: console.log("Abaixo do peso ideal."); break;
            case imc >= 18.6 && imc <= 24.9: console.log("Faixa de peso ideal."); break;
            case imc >= 25 && imc <= 29.9: console.log("Sobrepeso."); break;
            case imc >= 30 && imc <= 34.9: console.log("Obesidade grau I."); break;
            case imc >= 35 && imc <= 39.9: console.log("Obesidade grau II (grave)."); break;
            case imc >= 40: console.log("Obesidade grau III (mórbida)."); break;
            default: console.log("IMC inválido.");
        }
    }
}