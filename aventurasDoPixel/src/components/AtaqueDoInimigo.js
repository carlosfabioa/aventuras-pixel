class EnemyAttack {
    constructor(enemyId, mainCharacterId, attackContainerId, attackImageSrc) {
        this.enemy = document.getElementById(enemyId);
        this.mainCharacter = document.getElementById(mainCharacterId);
        this.attackContainer = document.getElementById(attackContainerId);
        this.attackImageSrc = attackImageSrc;
    }}