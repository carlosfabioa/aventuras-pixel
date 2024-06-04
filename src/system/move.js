/**
 * Classe responsável por gerenciar o movimento de uma entidade no sistema ECS.
 * @class
 */
class MoveSystem {
    /**
     * Mapeamento das teclas de seta para os movimentos correspondentes.
     * @static
     * @type {Object}
     */
    static keys = {
      "ArrowUp": {x: 0, y: -1},
      "ArrowDown": {x: 0, y: 1},
      "ArrowLeft": {x: -1, y: 0},
      "ArrowRight": {x: 1, y: 0},
    };
  
    /**
     * Cria uma instância do sistema de movimento para uma entidade específica.
     * @constructor
     * @param {Entity} entity - A entidade a ser controlada pelo sistema de movimento.
     */
    constructor(entity) {
      /**
       * A entidade controlada pelo sistema de movimento.
       * @type {Element}
       */
      console.log(entity);
      this.entity = document.getElementById(entity.id);
      
      /**
       * Escuta os eventos de teclado para movimentar a entidade.
       */
      document.addEventListener("keydown", (event) => {
        console.log(event.key);
        const move = MoveSystem.keys[event.key];
        if (move) {
          this.moveBlock(move.x, move.y);
        }
      });
    }
  
    /**
     * Move a entidade na tela.
     * @param {number} x - A quantidade de movimento no eixo x.
     * @param {number} y - A quantidade de movimento no eixo y.
     * @returns {void}
     */
    moveBlock(x, y) {
      console.log(x, y);
      this.entity.style.left = `${parseInt(this.entity.style.left || 0) + x}px`;
      this.entity.style.top = `${parseInt(this.entity.style.top || 0) + y}px`;
    }
}

export default MoveSystem