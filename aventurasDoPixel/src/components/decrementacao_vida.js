class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }

    decrementarVida(dano) {
        this.vida -= dano;
    }
}