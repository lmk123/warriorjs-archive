// 第 24 轮之后就没有敌人了
const noEnemyTurn = 24
// 杀死一个 Thick Sludge 至少需要 12 点血
const minHealth = 12

class Player {
  constructor() {
    // 记录当前是第几轮
    this.turn = 0
    this.lastTurnHealth = 20
  }
  playTurn(warrior) {
    this.turn += 1
    let health = warrior.health()
    if (warrior.feel().isEmpty()) {
      if (
        // 如果血量不相等，说明上一轮被攻击过，此时直接往前走
        this.lastTurnHealth === health &&
        this.turn < noEnemyTurn &&
        health <= minHealth
      ) {
        warrior.rest()
        health = Math.min(20, health + 2)
      } else {
        warrior.walk()
      }
    } else {
      warrior.attack()
    }
    this.lastTurnHealth = health
  }
}
