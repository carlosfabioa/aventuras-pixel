import entities from "./src/index.js";
import Entity from "./src/entities/entity.js";

/**
 * Renderiza as entidades no canvas.
 * @param {Array<Entity>} entities - Um array de objetos representando as entidades a serem renderizadas.
 */
function renderEntities(entities) {
    // Percorre todas as entidades
    entities.forEach(entity => {
        /**
         * Cria um novo elemento <canvas> e adiciona ao corpo do documento.
         * @type {HTMLCanvasElement}
         */
        const canvas = document.createElement('canvas');

        const dimensionComponent = entity.getComponent('DimensionComponent');

        canvas.id = entity.id;
        canvas.style.position = "relative";
        canvas.width = dimensionComponent.width
        canvas.height = dimensionComponent.height;
        document.body.appendChild(canvas);

        /**
         * O contexto de renderização 2D do canvas.
         * @type {CanvasRenderingContext2D}
         */
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const positionComponent = entity.getComponent('PositionComponent');

        ctx.fillStyle = 'red';
        ctx.fillRect(positionComponent.x, positionComponent.y, dimensionComponent.width, dimensionComponent.height);
        entity.executeSystems()
    });
}

renderEntities(entities)
