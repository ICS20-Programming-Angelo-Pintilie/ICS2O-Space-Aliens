/* global Phaser */

// Copyright (c) 2022 Angelo Pinilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Title Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.menuSceneText = null
    this.menuSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', './images/aliens_screen_image2.jpg')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'MenuSceneBackground').setScale(2.75)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.menuSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Test', this.menuSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
    
  }
}

export default MenuScene