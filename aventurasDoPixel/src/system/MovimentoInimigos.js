const npc = document.getElementById('inimigo');
let positionX = window.innerWidt; // Posição inicial
let speed = 2; // Velocidade de movimento

function moveNPC() {
  // Move o NPC na direção atual
  positionX += speed;

  // Define a largura da tela
  const screenWidth = window.innerWidth;

  // Se o NPC atingir o final da tela para a direita, mude a direção para a esquerda
  if (positionX >= screenWidth - 50) {
    speed = -Math.abs(speed); // Altera a direção para esquerda
    npc.style.transform = 'scaleX(-1)'; // Inverte o NPC horizontalmente
  }

  // Se o NPC atingir o início da tela para a esquerda, mude a direção para a direita
  if (positionX <= 0) {
    speed = Math.abs(speed); // Altera a direção para direita
    npc.style.transform = 'scaleX(1)'; // Restaura a orientação do NPC
  }

  // Atualiza a posição horizontal do NPC
  npc.style.left = positionX + 'px';

  // Solicita a próxima atualização de frame de animação
  requestAnimationFrame(moveNPC);
}

// Inicia a animação do NPC
moveNPC();