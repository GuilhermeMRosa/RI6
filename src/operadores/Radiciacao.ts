import Calculo from "./Calculo";

export default class Radiciacao extends Calculo{
    calcular(numero1: number, numero2: number): number {
        return Math.pow(numero1, 1 / numero2)
    }
}