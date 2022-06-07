/* global Phaser */

// Copyright (c) 2022 Angelo Pinilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    
    //star backdrop image
    this.load.image('starBackground', './images/starBackground.png')
    
  }

  create (data) {
    this.background = this.add.sprite(0, 0, 'starBackground').setScale(2.00)
    this.background.setOrigin(0, 0)

  }

  update (time, delta) {
    
  }
}

export default GameScene