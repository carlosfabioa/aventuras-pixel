/**
 * Componente para armazenar as dimensões de uma entidade.
 * @class
 */
class DimensionComponent {
    /**
     * Cria uma instância do componente de dimensão.
     * @constructor
     * @param {number} width - A largura inicial.
     * @param {number} height - A altura inicial.
     */
    constructor(width, height) {
      /**
       * A largura do componente.
       * @type {number}
       */
      this.width = width;
  
      /**
       * A altura do componente.
       * @type {number}
       */
      this.height = height;
    }
  
    /**
     * Atualiza as dimensões do componente.
     * @param {number} width - A nova largura.
     * @param {number} height - A nova altura.
     * @returns {void}
     */
    update(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  export default DimensionComponent;
  