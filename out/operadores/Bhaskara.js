"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculo_1 = __importDefault(require("./Calculo"));
class Bhaskara extends Calculo_1.default {
    constructor(numero1, numero2, numero3) {
        super(numero1, numero2);
        this.numero3 = numero3;
    }
    // @ts-ignore
    calcular(a, b, c) {
        const delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            return { x1: null, x2: null };
        }
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return { x1, x2 };
    }
}
exports.default = Bhaskara;
