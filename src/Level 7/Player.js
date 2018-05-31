class Player {
  constructor() {
    // 记录当前是第几轮
    this.turn = 0
  }
  playTurn(warrior) {
    this.turn += 1
    if (this.turn === 8) {
      warrior.walk('backward')
    } else if (this.turn === 9) {
      warrior.rest()
    } else {
      const space = warrior.feel()
      if (space.isWall()) {
        warrior.pivot()
      } else if (space.isEmpty()) {
        warrior.walk()
      } else {
        warrior.attack()
      }
    }
  }
}
