import Calculo from "./Calculo";

export default class Bhaskara extends Calculo {

    numero3: number

    constructor(numero1: number, numero2: number, numero3: number) {
        super(numero1, numero2)
        this.numero3 = numero3
    }

    // @ts-ignore
    calcular(a: number, b: number, c: number): { x1: number | null; x2: number | null } {
        const delta = b ** 2 - 4 * a * c

        if (delta < 0) {
            return { x1: null, x2: null };
        }

        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)

        return { x1, x2 }
    }
}   