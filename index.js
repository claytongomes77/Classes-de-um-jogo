// Definindo a classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar um ataque
    atacar() {
        let ataque;

        // Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
               ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
               // break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
               // break;
            default:
                ataque = "um ataque genérico";
        }

        // Exibindo a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroiExemplo = new Heroi("Herói Exemplo", 25, "guerreiro");
heroiExemplo.atacar();
const novoHeroi = new Heroi("Novo Herói", 30, "mago");
novoHeroi.atacar();
const novoHeroi1 = new Heroi("Novo Herói", 46, "monge");
novoHeroi1.atacar();
const novoHeroi2 = new Heroi("Novo Herói", 20, "ninja");
novoHeroi2.atacar();