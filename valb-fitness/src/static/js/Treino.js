import { Professor } from "./Professor";

export class Treino {
    constructor(codigo, aluno, treinador, dia, exercicios) {
        this.codigo = codigo;
        this.aluno = aluno;
        this.treinador = treinador;
        this.dia = dia; // dia A, dia B, dia C ...
        this.exercicios = exercicios;
    }

    set aluno(aluno) {
        if (aluno instanceof Aluno) {
            this.aluno = aluno;
        }
    }

    get aluno() {
        return this.aluno;
    }

    set treinador(treinador) {
        if (treinador instanceof Professor) {
            this.treinador = treinador;
        }
    }

    get treinador() {
        return this.treinador;
    }

    set exercicios(exercicios) {
        if (exercicios instanceof Exercicio) {
            this.exercicios = exercicios;
        }
    }

    get exercicios() {
        return this.exercicios;
    }
}