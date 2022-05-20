import { Funcionario } from "./Funcionario";

export class Secretaria extends Funcionario {
    constructor(id, senha, nomeCompleto) {
        super(id, senha, nomeCompleto);
    }
}