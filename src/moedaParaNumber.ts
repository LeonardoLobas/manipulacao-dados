export default function moedaParaNumero(moeda: string): number | null {
    console.log(moeda);
    const numero = Number(moeda.replace(".", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
}
