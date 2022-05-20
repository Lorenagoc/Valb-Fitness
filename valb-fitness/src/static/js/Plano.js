export class Plano {
    constructor(tipo, frequenciaSemanal, parcelas, preco) {
        this.tipo = tipo; // M = mensal, S = semanal, A = anual
        this.frequenciaSemanal = frequenciaSemanal;
        this.parcelas = parcelas;
        this.preco = preco;
    }
}