"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mensagens_1 = __importDefault(require("./utils/Mensagens"));
const Calculadora_1 = __importDefault(require("./utils/Calculadora"));
const msgs = new Mensagens_1.default();
const calculadora = new Calculadora_1.default();
msgs.boasVindas();
msgs.listarOpcoes();
msgs.comoUsar();
calculadora.iniciar();
