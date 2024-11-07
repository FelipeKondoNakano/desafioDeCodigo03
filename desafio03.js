class heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }
    atacar(){
        let ataque;

        switch(this.classe.toLowerCase()){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque =  "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
                break;
        }
        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

const mago = new  heroi("Gandalf",200, "mago");
const guerreiro = new heroi("Thor", 1500, "guerreiro");
const monge = new heroi("Chin", 40, "monge");
const ninja = new  heroi("Hanzo", 30, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();