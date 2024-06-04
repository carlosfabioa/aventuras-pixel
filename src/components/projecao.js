document.getElementById("Esquerda").innerHTML = '<img src="../aventurasDoPixel/assets/images/esq.png" alt="">';
document.getElementById("Direita").innerHTML = '<img src="../aventurasDoPixel/assets/images/dir.png" alt="">';
document.getElementById("Cima").innerHTML = '<img src="../aventurasDoPixel/assets/images/cim.png" alt="">';
document.getElementById("Baixo").innerHTML = '<img src="../aventurasDoPixel/assets/images/baix.png" alt="">';

function applyStylesBasedOnScreen() {
    if (window.matchMedia("(max-width: 667px) and (orientation: landscape)").matches) {
      document.getElementById("Esquerda").style.display = "block";
      document.getElementById("Esquerda").style.position = "relative";
      document.getElementById("Esquerda").style.top = "766px";
      document.getElementById("Esquerda").style.left = "445px";

      document.getElementById("Direita").style.display = "block";
      document.getElementById("Direita").style.position = "relative";
      document.getElementById("Direita").style.top = "696px";
      document.getElementById("Direita").style.left = "560px";

      document.getElementById("Cima").style.display = "block";
      document.getElementById("Cima").style.position = "relative";
      document.getElementById("Cima").style.top = "570px";
      document.getElementById("Cima").style.left = "500px";

      document.getElementById("Baixo").style.display = "block";
      document.getElementById("Baixo").style.position = "relative";
      document.getElementById("Baixo").style.top = "600px";
      document.getElementById("Baixo").style.left = "502px";
    
    }
    else{
      document.getElementById("Esquerda").style.display = "none";
      document.getElementById("Direita").style.display = "none";
      document.getElementById("Cima").style.display = "none";
      document.getElementById("Baixo").style.display = "none";
    }
  }

  applyStylesBasedOnScreen();
  

  window.addEventListener("resize", applyStylesBasedOnScreen);
  window.addEventListener("orientationchange", applyStylesBasedOnScreen);