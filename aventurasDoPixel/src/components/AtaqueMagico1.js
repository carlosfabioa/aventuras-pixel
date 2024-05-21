// Espera que o DOM esteja completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referências para os elementos HTML do inimigo, do personagem principal e do contêiner de bolas
    const enemy = document.getElementById('enemy');
    const mainCharacter = document.getElementById('main-character');
    const ballContainer = document.getElementById('ball-container');

    // Função para criar uma imagem de ataque
    function createAttackImage() {
        // Cria um elemento de imagem para representar o ataque
        const attackImage = document.createElement('img');
        attackImage.src = '/imagens/151b8518ed9931d583f94adb74a4ac-unscreen.gif'; // Substitua pela imagem do ataque utilizado
        attackImage.alt = 'Attack Image';
        attackImage.classList.add('attack-image');
        ballContainer.appendChild(attackImage); // Adiciona a imagem ao contêiner de bolas

        // Calcula as posições iniciais e finais do ataque
        const enemyRect = enemy.getBoundingClientRect();
        const mainCharacterRect = mainCharacter.getBoundingClientRect();
        const ballContainerRect = ballContainer.getBoundingClientRect();
        const startX = enemyRect.right - ballContainerRect.left;
        const startY = enemyRect.top + enemyRect.height / 2 - ballContainerRect.top - 25; // 25 é metade da altura da imagem (ajuste conforme necessário)
        const targetX = mainCharacterRect.left - ballContainerRect.left;
        const targetY = mainCharacterRect.top + mainCharacterRect.height / 2 - ballContainerRect.top - 25; // 25 é metade da altura da imagem (ajuste conforme necessário)

        // Define as posições iniciais e finais do ataque
        attackImage.style.left = `${startX}px`;
        attackImage.style.top = `${startY}px`;
        attackImage.style.setProperty('--start-x', `${startX}px`);
        attackImage.style.setProperty('--start-y', `${startY}px`);
        attackImage.style.setProperty('--target-x', `${targetX}px`);
        attackImage.style.setProperty('--target-y', `${targetY}px`);

        // Inicia a animação do ataque
        attackImage.style.animation = 'moveBall 4s linear forwards';

        // Remove o ataque quando ele colide com o personagem principal
        attackImage.addEventListener('animationiteration', () => {
            const attackRect = attackImage.getBoundingClientRect();
            if (isColliding(attackRect, mainCharacterRect)) {
                attackImage.remove();
            }
        });

        return attackImage; // Retorna a imagem do ataque
    }

    // Função para verificar colisões entre dois retângulos
    function isColliding(rect1, rect2) {
        return !(
            rect1.top > rect2.bottom ||
            rect1.bottom < rect2.top ||
            rect1.left > rect2.right ||
            rect1.right < rect2.left
        );
    }

    // Função para realizar o ataque do inimigo
    function enemyAttack() {
        const attackImage = createAttackImage(); // Cria uma imagem de ataque

        const moveAttack = () => {
            const enemyRect = enemy.getBoundingClientRect();
            const mainCharacterRect = mainCharacter.getBoundingClientRect();

            const currentX = parseFloat(attackImage.style.left);
            const currentY = parseFloat(attackImage.style.top);

            const deltaX = mainCharacterRect.left - enemyRect.right;
            const deltaY = mainCharacterRect.top - enemyRect.top;

            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const stepX = deltaX / distance;
            const stepY = deltaY / distance;

            let newX = currentX + stepX * 5; // Ajuste a velocidade conforme necessário
            let newY = currentY + stepY * 5; // Ajuste a velocidade conforme necessário

            attackImage.style.left = `${newX}px`;
            attackImage.style.top = `${newY}px`;

            // Remove o ataque quando ele colide com o personagem principal
            if (isColliding(attackImage.getBoundingClientRect(), mainCharacterRect)) {
                attackImage.remove();
            } else {
                requestAnimationFrame(moveAttack); // Continua movendo o ataque
            }
        };

        requestAnimationFrame(moveAttack); // Inicia o movimento do ataque
    }

    // Simula o ataque do inimigo a cada 2 segundos
    setInterval(enemyAttack, 3000);
});
