import moedaParaNumero from "./moedaParaNumber";
import stringToDate from "./stringToDate";

declare global {
    type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
    type TransacaoStatus =
        | "Paga"
        | "Recusada pela operadora do cartão"
        | "Aguaradando pagamento"
        | "Estornada";

    interface TransacaoAPI {
        Nome: string;
        ID: number;
        Data: string;
        Status: TransacaoStatus;
        Email: string;
        ["Valor (R$)"]: string;
        ["Forma de Pagamento"]: TransacaoPagamento;
        ["Cliente Novo"]: number;
    }

    interface Transacao {
        nome: string;
        id: number;
        data: string;
        status: TransacaoStatus;
        email: string;
        moeda: string;
        valor: number | null;
        pagamento: TransacaoPagamento;
        novo: boolean;
    }
}

export function normalizarTransacao(transacao: TransacaoAPI) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringToDate(transacao.Data),
        dataNomral: transacao.Data,
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: moedaParaNumero(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    };
}
