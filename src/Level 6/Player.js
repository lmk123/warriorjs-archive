// 在 14 轮之后就要面对两个 Archer 了，在这之前需要把血加起来
const beforeTwoArchersTurn = 14
// 杀死两个 Archer 至少需要 16 点血
const minHealth = 16

class Player {
  constructor() {
    // 记录当前是第几轮
    this.turn = 0
  }
  playTurn(warrior) {
    this.turn += 1
    if (this.turn === 7 || this.turn === 8) {
      warrior.walk('backward')
    } else if (this.turn === 9) {
      warrior.rescue('backward')
    } else if (warrior.feel().isEmpty()) {
      if (this.turn < beforeTwoArchersTurn && warrior.health() < minHealth) {
        warrior.rest()
      } else {
        warrior.walk()
      }
    } else {
      warrior.attack()
    }
  }
}
