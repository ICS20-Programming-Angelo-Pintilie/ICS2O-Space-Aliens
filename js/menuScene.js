/* global Phaser */

// Copyright (c) 2022 Angelo Pinilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Game Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
    this.load.image('MenuSceneBackground', './images/aliens_screen_image2.jpg')
    this.load.image('startButton', './images/start.png')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'MenuSceneBackground').setScale(1)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

  }

  update (time, delta) {
    
  }
}

export default MenuScene