import Estatisticas from "./Estatisticas";
import { fetchDados } from "./fetchDados";
import { normalizarTransacao } from "./normalizacaoTransacao";

async function handleData() {
    const data = await fetchDados<TransacaoAPI[]>(
        `https://api.origamid.dev/json/transacoes.json?`
    );

    if (!data) return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}

function preencherEstatisticas(transacaes: Transacao[]): void {
    const data = new Estatisticas(transacaes);
    const totalElement = document.querySelector<HTMLElement>("#total span");
    if (totalElement) {
        totalElement.innerText = data.total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    }
}

function preencherTabela(transacaes: Transacao[]): void {
    const tabela = document.querySelector("#transacao tbody");
    if (!tabela) return;
    transacaes.forEach((transacao) => {
        tabela.innerHTML += `
        <tr>
          <td>${transacao.nome}</td>
          <td>${transacao.email}</td>
          <td>${transacao.moeda}</td>
          <td>${transacao.pagamento}</td>
          <td>${transacao.status}</td>
        </tr>   
      `;
    });
}

handleData();
