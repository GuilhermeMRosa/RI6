export default class Mensagens {

    boasVindas = () => {
        console.log('\nBem-vindo a calculadora polimórfica\n')
    }

    listarOpcoes = () => {
        console.log(`Aqui você pode:`)
        console.log(`Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar ou resolver Bhaskara\n`)
    }

    comoUsar = () => {
        console.log(`Para usar, digite a operação desejada e siga as instruções`)
        console.log(`Operações com 2 números: Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar`)
        console.log(`Operações com 3 números: Bhaskara (coeficientes a, b e c)`)
        console.log(`Para encerrar digite "Sair"\n`)
    }

    resultado = (valor: number) => {
        console.log(`\nResultado: ${valor}\n`)
    }

    raizes = (resultado: { x1: number | null; x2: number | null }) => {
        if (resultado.x1 === null) {
            console.log(`\nDelta negativo: sem raízes reais.\n`)
            return
        }
        console.log(`\nX1 = ${resultado.x1} | X2 = ${resultado.x2}\n`)
    }

    erro = () => {
        console.log(`\nOperação inválida. Tente novamente.\n`)
    }
}