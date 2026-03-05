"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculo_1 = __importDefault(require("./Calculo"));
class Radiciacao extends Calculo_1.default {
    calcular(numero1, numero2) {
        return Math.pow(numero1, 1 / numero2);
    }
}
exports.default = Radiciacao;
