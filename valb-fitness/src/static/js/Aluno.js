import { Cidadao } from "./Cidadao";

export class Aluno extends Cidadao {
    constructor(nomeCompleto, cpf, dataNascimento, identidade, id, senha, objetivo, aptoFisicamente) {
        super(nomeCompleto, cpf, dataNascimento, identidade);
        this.id = id;
        this.senha = senha;
        this.objetivo = objetivo;
        this.aptoFisicamente = aptoFisicamente;
    }
}