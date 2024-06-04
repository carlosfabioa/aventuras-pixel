/**
 * Classe que representa uma entidade no sistema ECS.
 * @class
 */
class Entity {
    /**
     * O próximo ID disponível para atribuir a uma nova entidade.
     * @static
     * @type {number}
     */
    static nextId = 0;
  
    /**
     * Cria uma nova instância de entidade.
     * @constructor
     */
    constructor() {
      /**
       * O ID único da entidade.
       * @type {number}
       */
      this.id = Entity.nextId+=1;
  
      /**
       * Um objeto que armazena os componentes associados a esta entidade.
       * @type {Object}
       */
      this.components = {};

      /**
       * A lista de sistemas associados à entidade.
       * @type {Array<function>}
       */
      this.systems = [];

      /**
       * A lista de sistemas associados à entidade.
       * @type {Entity}
       */
      this.instance = null;
    }
  
    /**
     * Adiciona um componente à entidade.
     * @param {Object} component - O componente a ser adicionado.
     */
    addComponent(component) {
      this.components[component.constructor.name] = component;
    }
  
    /**
     * Obtém um componente específico associado à entidade.
     * @param {string} componentName - O nome do componente a ser obtido.
     * @returns {Object} - O componente associado, se existir.
     */
    getComponent(componentName) {
      return this.components[componentName];
    }

    /**
     * Adiciona uma lista de sistemas à entidade.
     * @param {Entity} instance - Instancia da entidade
     * @param {Array<class>} systems - Uma matriz de classes de sistemas a serem adicionados à entidade.
     * @returns {void} 
     */
    addSystems(instance, systems) {
        this.instance = instance;

        systems.forEach(System => {
            this.systems.push((() => new System(this.instance)));
        });

        console.log(this.systems);
    }

    /**
     * Executa os sistemas associados à entidade.
     * @returns {void}
     */
    executeSystems() {
        this.systems.forEach(func => {
            func();
        });
    }
}
  
export default Entity;
  