"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const Mensagens_1 = __importDefault(require("../utils/Mensagens"));
const Soma_1 = __importDefault(require("../operadores/Soma"));
const Subtracao_1 = __importDefault(require("../operadores/Subtracao"));
const Multiplicacao_1 = __importDefault(require("../operadores/Multiplicacao"));
const Divisao_1 = __importDefault(require("../operadores/Divisao"));
const Potenciacao_1 = __importDefault(require("../operadores/Potenciacao"));
const Radiciacao_1 = __importDefault(require("../operadores/Radiciacao"));
const Bhaskara_1 = __importDefault(require("../operadores/Bhaskara"));
class Calculadora {
    constructor() {
        this.msgs = new Mensagens_1.default();
        this.leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.iniciar = () => {
            this.leitor.question("Qual operação deseja realizar? (Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar, Bhaskara, Sair): ", (op) => {
                const operacao = op.trim();
                if (operacao === 'Sair') {
                    console.log(`Até uma próxima, falou...`);
                    this.leitor.close();
                    return;
                }
                if (operacao === 'Bhaskara') {
                    this.leitor.question("Digite o valor de A: ", (a) => {
                        this.leitor.question("Digite o valor de B: ", (b) => {
                            this.leitor.question("Digite o valor de C: ", (c) => {
                                const calculo = new Bhaskara_1.default(Number(a), Number(b), Number(c));
                                this.msgs.raizes(calculo.calcular(Number(a), Number(b), Number(c)));
                                this.iniciar();
                            });
                        });
                    });
                    return;
                }
                this.leitor.question("Digite o primeiro número: ", (num1) => {
                    this.leitor.question("Digite o segundo número: ", (num2) => {
                        const n1 = Number(num1);
                        const n2 = Number(num2);
                        let calculo;
                        switch (operacao) {
                            case 'Somar':
                                calculo = new Soma_1.default(n1, n2);
                                break;
                            case 'Subtrair':
                                calculo = new Subtracao_1.default(n1, n2);
                                break;
                            case 'Multiplicar':
                                calculo = new Multiplicacao_1.default(n1, n2);
                                break;
                            case 'Dividir':
                                calculo = new Divisao_1.default(n1, n2);
                                break;
                            case 'Potenciar':
                                calculo = new Potenciacao_1.default(n1, n2);
                                break;
                            case 'Radiciar':
                                calculo = new Radiciacao_1.default(n1, n2);
                                break;
                            default:
                                this.msgs.erro();
                                this.iniciar();
                                return;
                        }
                        this.msgs.resultado(calculo.calcular(n1, n2));
                        this.iniciar();
                    });
                });
            });
        };
    }
}
exports.default = Calculadora;
