/**
 * Componente para armazenar as coordenadas de posição de uma entidade.
 * @class
 */
class PositionComponent {
    /**
     * Cria uma instância do componente de posição.
     * @constructor
     * @param {number} x - A coordenada x inicial.
     * @param {number} y - A coordenada y inicial.
     */
    constructor(x, y) {
      /**
       * A coordenada x do componente.
       * @type {number}
       */
      this.x = x;
  
      /**
       * A coordenada y do componente.
       * @type {number}
       */
      this.y = y;
    }
  
    /**
     * Atualiza as coordenadas do componente.
     * @param {number} x - A nova coordenada x.
     * @param {number} y - A nova coordenada y.
     * @returns {void}
     */
    update(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  export default PositionComponent;
  