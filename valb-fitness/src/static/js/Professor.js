import { Funcionario } from "./Funcionario";

export class Professor extends Funcionario {
    constructor(id, senha, nomeCompleto, cref) {
        super(id, senha, nomeCompleto);
        this.cref = cref;
    }
}