import Entity from "./entities/entity.js";
import PositionComponent from "./components/position.js";
import DimensionComponent from "./components/dimension.js";
import MoveSystem from "./system/move.js";

const block = new Entity()
block.addComponent(new PositionComponent(10, 40))
block.addComponent(new DimensionComponent(100, 125))
block.addSystems(block, [MoveSystem])

const entities = [block]

export default entities;