import { Funcionario } from "./Funcionario";

export class Medico extends Funcionario {
    constructor(id, senha, nomeCompleto, crm) {
        super(id, senha, nomeCompleto);
        this.crm = crm;
    }
}