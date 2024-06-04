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


var ScreenManipulator = {
    elements: {
      Esquerda: null,
      Direita: null,
      Cima: null,
      Baixo: null
    },
  
    initialize: function () {
      this.elements.Esquerda = document.getElementById("Esquerda");
      this.elements.Direita = document.getElementById("Direita");
      this.elements.Cima = document.getElementById("Cima");
      this.elements.Baixo = document.getElementById("Baixo");
      
      this.applyStylesBasedOnScreen();
  
      window.addEventListener("resize", () => {
        this.applyStylesBasedOnScreen();
      });
  
      window.addEventListener("orientationchange", () => {
        this.applyStylesBasedOnScreen();
      });
    },
  
    applyStylesBasedOnScreen: function () {
      if (window.matchMedia("(max-width: 667px) and (orientation: landscape)").matches) {
        this.elements.Esquerda.style.display = "block";
        this.elements.Esquerda.style.position = "relative";
        this.elements.Esquerda.style.top = "766px";
        this.elements.Esquerda.style.left = "445px";
  
        this.elements.Direita.style.display = "block";
        this.elements.Direita.style.position = "relative";
        this.elements.Direita.style.top = "696px";
        this.elements.Direita.style.left = "560px";
  
        this.elements.Cima.style.display = "block";
        this.elements.Cima.style.position = "relative";
        this.elements.Cima.style.top = "570px";
        this.elements.Cima.style.left = "500px";
  
        this.elements.Baixo.style.display = "block";
        this.elements.Baixo.style.position = "relative";
        this.elements.Baixo.style.top = "600px";
        this.elements.Baixo.style.left = "502px";
      } else {
        this.hideAll();
      }
    },
  
    hideAll: function () {
      for (var key in this.elements) {
        if (this.elements.hasOwnProperty(key)) {
          this.elements[key].style.display = "none";
        }
      }
    }
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    ScreenManipulator.initialize();
  });