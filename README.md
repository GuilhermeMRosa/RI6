# RI6 — Calculadora Polimórfica com TypeScript

**Disciplina:** Análise e Desenvolvimento de Sistemas  
**Professor:** Gerson  
**Instituição:** FATEC São José dos Campos  

---

## 📋 Sobre a atividade

As RIs são atividades propostas pelo professor com o objetivo de colocar em prática os conceitos ensinados em aula. Esta atividade marca a transição do JavaScript para **TypeScript**, aplicando conceitos avançados de orientação a objetos em uma calculadora interativa via terminal.

## 🧮 Desafio proposto

Desenvolver uma **calculadora polimórfica** executada no terminal, onde cada operação matemática é representada por uma classe própria que herda de uma classe abstrata `Calculo`. A lógica de interação com o usuário e as mensagens do sistema são isoladas em classes utilitárias.

## 🗂️ Estrutura do projeto
```
RI6/
├── index.ts
├── operadores/
│   ├── Calculo.ts         # Classe abstrata mãe
│   ├── Soma.ts
│   ├── Subtracao.ts
│   ├── Multiplicacao.ts
│   ├── Divisao.ts
│   ├── Potenciacao.ts
│   ├── Radiciacao.ts
│   └── Bhaskara.ts
└── utils/
    ├── Calculadora.ts     # Lógica de interação com o terminal
    └── Mensagens.ts       # Textos e feedback ao usuário
```

## ➕ Operações disponíveis

| Operação | Entradas | Observação |
|---|---|---|
| Somar | 2 números | — |
| Subtrair | 2 números | — |
| Multiplicar | 2 números | — |
| Dividir | 2 números | — |
| Potenciar | 2 números | — |
| Radiciar | 2 números | — |
| Bhaskara | 3 coeficientes (a, b, c) | Retorna x1 e x2, ou avisa delta negativo |

## 🔄 Evolução em relação à RI5

| Aspecto | RI5 | RI6 |
|---|---|---|
| Linguagem | JavaScript | TypeScript |
| Tipagem | Dinâmica | Estática |
| Herança | — | Classe abstrata + extensão |
| Polimorfismo | — | Método `calcular()` sobrescrito por operador |
| Interação | Apenas console | Terminal interativo com `readline` |

## 🧠 Conceitos praticados

- **TypeScript** com tipagem estática
- **Classe abstrata** (`Calculo`) como contrato para os operadores
- **Herança** com `extends` em cada operador
- **Polimorfismo** — cada subclasse sobrescreve o método `calcular()`
- **Single Responsibility Principle** — operadores, interface e mensagens em arquivos separados
- Interação com o terminal via módulo **`readline`**
- Tratamento de casos especiais (delta negativo no Bhaskara)

## 🚀 Como executar
```bash
# Clone o repositório
git clone https://github.com/GuilhermeMRosa/RI6.git

# Acesse a pasta
cd RI6

# Instale as dependências
npm install

# Execute
npx ts-node index.ts
```

---

> Desenvolvido como parte das atividades avaliativas do curso de ADS — FATEC São José dos Campos.
