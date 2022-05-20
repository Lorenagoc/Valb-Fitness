export class Modalidade {
    constructor(descricao, turma, plano) {
        this.descricao = descricao;
        this.turma = turma;
        this.plano = plano;
    }

    set turma(turma) {
        if (turma instanceof Turma) {
            this.turma = turma;
        }
    }

    get turma() {
        return this.turma;
    }

    set plano(plano) {
        if (plano instanceof Plano) {
            this.plano = plano;
        }
    }

    get plano() {
        return this.plano;
    }
}