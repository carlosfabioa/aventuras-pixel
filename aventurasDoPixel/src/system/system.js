// Define um objeto jogador com uma propriedade 'vida' e um método 'receberDano'

let personagem = {
    vida: 3, // Define a quantidade inicial de vidas como 3
    receberDano: function(personagem) { // Define o método receberDano
        // Reduz o valor da vida em 1
        this.vida -= 1;
        console.log("O jogador recebeu dano");
        
        // Verifica se o jogador perdeu todas as vidas
        if (this.vida <= 0) {
            // Se sim, exibe uma mensagem indicando que o jogador perdeu todas as vidas e encerra o jogo
            console.log("O jogador perdeu todas as vidas.");
            // Aqui você pode adicionar qualquer ação que deseja realizar quando o jogador perde todas as vidas
        }
    }
};

// Chama o método receberDano do objeto jogador
personagem.receberDano(personagem);

