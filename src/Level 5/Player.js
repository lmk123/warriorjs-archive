// 第 18 轮之后就没有敌人了
const noEnemyTurn = 18
// 杀死一个 Thick Sludge 至少需要 12 点血
const minHealth = 12

class Player {
  constructor() {
    // 记录当前是第几轮
    this.turn = 0
  }
  playTurn(warrior) {
    this.turn += 1
    const space = warrior.feel()
    if (space.isEmpty()) {
      if (this.turn < noEnemyTurn && warrior.health() <= minHealth) {
        warrior.rest()
      } else {
        warrior.walk()
      }
    } else if (space.getUnit().isEnemy()) {
      warrior.attack()
    } else {
      warrior.rescue()
    }
  }
}
