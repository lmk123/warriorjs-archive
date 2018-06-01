class Player {
  constructor() {
    this.captiveSaved = false
  }
  playTurn(warrior) {
    const spaces = warrior.look()
    if (!this.captiveSaved) {
      if (spaces[0].isEmpty()) {
        warrior.walk()
      } else {
        warrior.rescue()
        this.captiveSaved = true
      }
    } else if (
      spaces.some(space => {
        const unit = space.getUnit()
        return unit && unit.isEnemy()
      })
    ) {
      warrior.shoot()
    } else {
      warrior.walk()
    }
  }
}
