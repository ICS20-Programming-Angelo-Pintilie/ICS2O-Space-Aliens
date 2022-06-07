/* global Phaser */

// Copyright (c) 2022 Angelo Pinilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.gameSceneBackgroundImage = null
    this.gameSceneText = null
    this.gameSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    this.load.image('GameSceneBackground', './images/aliens_screen_image2.jpg')
  }

  create (data) {
    this.gameSceneBackgroundImage = this.add.sprite(0, 0, 'GameSceneBackground').setScale(1)
    this.gameSceneBackgroundImage.x = 1920 / 2
    this.gameSceneBackgroundImage.y = 1080 / 2

  }

  update (time, delta) {
    
  }
}

export default GameScene