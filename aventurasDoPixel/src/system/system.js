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


// CODIGO PARA ADICIONAR GRAVIDADE NO PLAYER

var player = document.getElementById('player');
var gravity = 1;                                                         // Defina a força da gravidade
var playerPosition = {
    x: 100,
    y: 1
};
function applyGravity() {                                                           // Função para atualizar a posição vertical do jogador com a gravidade
    if (playerPosition.y < window.innerHeight - player.offsetHeight) {                   // Verifica se o jogador está acima do chão
        playerPosition.y += gravity;
        player.style.top = playerPosition.y + 'px';                         // Adiciona a gravidade à posição vertical do jogador
    }
}
function update() {
    applyGravity();                                                        // Função para atualizar a posição do jogador
}                               
function gameLoop() {                               
    update();                               
    requestAnimationFrame(gameLoop);                                       // Loop principal do jogo
}                               
gameLoop();                                                               // Inicia o loop do jogo


function createAttack() {
    const attack = document.createElement('img');
    attack.src = this.attackImageSrc;
    attack.alt = 'Attack Image';
    attack.classList.add('attack-image');
    this.attackContainer.appendChild(attack);

    const enemyRect = this.enemy.getBoundingClientRect();
    const mainCharacterRect = this.mainCharacter.getBoundingClientRect();
    const attackContainerRect = this.attackContainer.getBoundingClientRect();
    const startX = enemyRect.right - attackContainerRect.left;
    const startY = enemyRect.top + enemyRect.height / 2 - attackContainerRect.top - 25;
    const targetX = mainCharacterRect.left - attackContainerRect.left;
    const targetY = mainCharacterRect.top + mainCharacterRect.height / 2 - attackContainerRect.top - 25;

    attack.style.left = `${startX}px`;
    attack.style.top = `${startY}px`;
    attack.style.setProperty('--start-x', `${startX}px`);
    attack.style.setProperty('--start-y', `${startY}px`);
    attack.style.setProperty('--target-x', `${targetX}px`);
    attack.style.setProperty('--target-y', `${targetY}px`);

    attack.style.animation = 'moveBall 4s linear forwards';

    attack.addEventListener('animationiteration', () => {
        const attackRect = attack.getBoundingClientRect();
        if (this.isColliding(attackRect, mainCharacterRect)) {
            attack.remove();
        }
    });

    return attack;
}

function isColliding(rect1, rect2) {
    return !(
        rect1.top > rect2.bottom ||
        rect1.bottom < rect2.top ||
        rect1.left > rect2.right ||
        rect1.right < rect2.left
    );
}

function moveAttack(attack) {
    const move = () => {
        const enemyRect = this.enemy.getBoundingClientRect();
        const mainCharacterRect = this.mainCharacter.getBoundingClientRect();
        const currentX = parseFloat(attack.style.left);
        const currentY = parseFloat(attack.style.top);

        const deltaX = mainCharacterRect.left - enemyRect.right;
        const deltaY = mainCharacterRect.top - enemyRect.top;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const stepX = deltaX / distance;
        const stepY = deltaY / distance;

        let newX = currentX + stepX * 5;
        let newY = currentY + stepY * 5;

        attack.style.left = `${newX}px`;
        attack.style.top = `${newY}px`;

        if (this.isColliding(attack.getBoundingClientRect(), mainCharacterRect)) {
            attack.remove();
        } else {
            requestAnimationFrame(move);
        }
    };

    requestAnimationFrame(move);
}

function enemyAttack() {
    const attack = this.createAttack();
    this.moveAttack(attack);
}

// Adicione outros tipos de ataque conforme necessário
// const iceballAttack = new EnemyAttack('enemy', 'main-character', 'attack-container', 'Imagem-Do-Ataque-Ice');
// setInterval(() => iceballAttack.enemyAttack(), 3000);
;
