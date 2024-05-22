class NiveisPosicao {
    constructor() {
        this.spawnPoints = []; // Pontos de spawn dos inimigos no nível
        this.enemies = []; // Lista de inimigos no nível
    }

    SpawnNiveis(x, y) {
        this.spawnPoints.push({ x, y });
    }

    SpawnInimigos(x, y) {
        this.enemies.push({ x, y });
    }
}

// Exemplo de Uso
const niveisPosicao = new NiveisPosicao();
niveisPosicao.SpawnNiveis(100, 100); // Adiciona um ponto de spawn no nível
niveisPosicao.SpawnNiveis(200, 200); // Adiciona outro ponto de spawn no nível
niveisPosicao.SpawnNiveis(300, 300); // Adiciona outro ponto de spawn no nível

// Suponha que você tenha coordenadas (x, y) para os inimigos
niveisPosicao.SpawnInimigos(100, 100); // Spawn do inimigo no primeiro ponto
niveisPosicao.SpawnInimigos(200, 200); // Spawn do inimigo no segundo ponto
niveisPosicao.SpawnInimigos(300, 300); // Spawn do inimigo no segundo ponto
