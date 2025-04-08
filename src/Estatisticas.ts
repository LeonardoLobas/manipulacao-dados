type transacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is transacaoValor {
    return transacao.valor !== null;
}

export default class Estatisticas {
    private transacoes;
    total;
    constructor(transacoes: Transacao[]) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    private setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
}
