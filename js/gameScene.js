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
    this.ship = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    
    //star backdrop image and space ship image
    this.load.image('starBackground', './images/starBackground.png')
    this.load.image('ship', './images/spaceShip.png')
    
  }

  create (data) {
    this.background = this.add.sprite(0, 0, 'starBackground').setScale(2.00)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1000 - 100, 'ship')
  }

  update (time, delta) {
    //called every 60 seconds

    const keyLeftObj = this.input.keyboard.addKey('LEFT')

    if (keyLeftObj.isDown === true) {
      
  }
}

export default GameScene