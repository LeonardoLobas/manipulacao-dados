import { fetchDados } from "./fetchDados";
import { normalizarTransacao } from "./normalizacaoTransacao";

async function handleData() {
    const data = await fetchDados<TransacaoAPI[]>(
        `https://api.origamid.dev/json/transacoes.json?`
    );

    if (!data) return;
    const transacoes = data.map(normalizarTransacao);
    console.log(transacoes);
}

handleData();
