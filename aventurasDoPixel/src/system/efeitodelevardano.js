    // Função para verificar colisão entre o jogador e o obstáculo
    function checkCollision(playerElement, obstacleElement) {
        const playerRect = playerElement.getBoundingClientRect();
        const obstacleRect = obstacleElement.getBoundingClientRect();

        if (!(playerRect.right < obstacleRect.left ||
            playerRect.left > obstacleRect.right ||
            playerRect.bottom < obstacleRect.top ||
            playerRect.top > obstacleRect.bottom)) {
            // Colisão detectada, o jogador foi atingido
            playerHit(playerElement);
        } else {
            // Sem colisão, remover filtro vermelho
            playerElement.style.filter = "none";
        }
    }

    // Função para aplicar o filtro vermelho ao jogador quando atingido
    function playerHit(playerElement) {
        playerElement.style.filter = "brightness(50%) saturate(200%) hue-rotate(0deg) sepia(100%)"; // Aplica o filtro vermelho ao jogador
    }

    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');

    // Verificar colisão regularmente
    setInterval(function() {
        checkCollision(player, obstacle);
    }, 100); // Verifica a colisão a cada 100 milissegundos (ajuste conforme necessário)