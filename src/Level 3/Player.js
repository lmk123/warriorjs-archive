// 第 22 轮之后就没有敌人了
const noEnemyTurn = 22
// 杀死一个 Sludge 至少需要 6 点血
const minHealth = 6

class Player {
  constructor() {
    // 记录当前是第几轮
    this.turn = 0
  }
  playTurn(warrior) {
    this.turn += 1
    if (warrior.feel().isEmpty()) {
      // 在第 22 轮之后已经没有敌人了，所以就无需加血了
      if (this.turn < noEnemyTurn && warrior.health() <= minHealth) {
        warrior.rest()
      } else {
        warrior.walk()
      }
    } else {
      warrior.attack()
    }
  }
}
