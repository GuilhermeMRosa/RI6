import * as readline from 'readline';
import Mensagens from '../utils/Mensagens';
import Soma from '../operadores/Soma';
import Subtracao from '../operadores/Subtracao';
import Multiplicacao from '../operadores/Multiplicacao';
import Divisao from '../operadores/Divisao';
import Potenciacao from '../operadores/Potenciacao';
import Radiciacao from '../operadores/Radiciacao';
import Bhaskara from '../operadores/Bhaskara';

export default class Calculadora {

    private msgs = new Mensagens()
    private leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    iniciar = () => {
        this.leitor.question("Qual operação deseja realizar? (Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar, Bhaskara, Sair): ", (op) => {
            const operacao = op.trim()

            if (operacao === 'Sair') {
                console.log(`Até uma próxima, falou...`)
                this.leitor.close()
                return
            }

            if (operacao === 'Bhaskara') {
                this.leitor.question("Digite o valor de A: ", (a) => {
                    this.leitor.question("Digite o valor de B: ", (b) => {
                        this.leitor.question("Digite o valor de C: ", (c) => {
                            const calculo = new Bhaskara(Number(a), Number(b), Number(c))
                            this.msgs.raizes(calculo.calcular(Number(a), Number(b), Number(c)))
                            this.iniciar()
                        })
                    })
                })
                return
            }

            this.leitor.question("Digite o primeiro número: ", (num1) => {
                this.leitor.question("Digite o segundo número: ", (num2) => {
                    const n1 = Number(num1)
                    const n2 = Number(num2)
                    let calculo

                    switch (operacao) {
                        case 'Somar':
                            calculo = new Soma(n1, n2)
                            break
                        case 'Subtrair':
                            calculo = new Subtracao(n1, n2)
                            break
                        case 'Multiplicar':
                            calculo = new Multiplicacao(n1, n2)
                            break
                        case 'Dividir':
                            calculo = new Divisao(n1, n2)
                            break
                        case 'Potenciar':
                            calculo = new Potenciacao(n1, n2)
                            break
                        case 'Radiciar':
                            calculo = new Radiciacao(n1, n2)
                            break
                        default:
                            this.msgs.erro()
                            this.iniciar()
                            return
                    }

                    this.msgs.resultado(calculo.calcular(n1, n2))
                    this.iniciar()
                })
            })
        })
    }
}