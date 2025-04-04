import { fetchDados } from "./fetchDados";

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

async function handleData() {
    const data = await fetchDados<TransacaoAPI[]>(
        `https://api.origamid.dev/json/transacoes.json`
    );
    console.log(data);

    if (data != null) {
        data.forEach((item) => {
            console.log(item);
        });
    }
}

handleData();
