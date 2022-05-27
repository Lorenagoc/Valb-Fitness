//import { Funcionario } from "./Funcionario";
const funcionario = require('./Funcionario')

export class Medico extends Funcionario {
    constructor(id, senha, nomeCompleto, crm) {
        super(id, senha, nomeCompleto);
        this.crm = crm;
    }
}
