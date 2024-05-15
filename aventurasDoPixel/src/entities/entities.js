function criarInimigo() {
    const numInimigos = jogador.nivel + Math.floor(Math.random() * 3); // Número de inimigos aumenta com o nível
    for (let i = 0; i < numInimigos; i++) {
        const novoInimigo = {
            nome: "Inimigo",
            vida: 50 + jogador.nivel * 10, // Aumentar a vida do inimigo com base no nível
            nivel: 1,
            x: Math.floor(Math.random() * 500),
            y: Math.floor(Math.random() * 500)
        };
        inimigos.push(novoInimigo);
    }
    atualizarVida();
}

setInterval(criarInimigo, INTERVALO_CRIACAO_INIMIGO);
