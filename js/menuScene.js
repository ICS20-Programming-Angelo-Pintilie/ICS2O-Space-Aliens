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
    //instructions
    this.menuSceneText = null
    this.menuSceneTextStyle = { font: '35px Times', fill: '#6F8FAF', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
    this.load.image('MenuSceneBackground', './images/UDMENU.png')
    this.load.image('startButton', './images/start.png')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'MenuSceneBackground').setScale(2)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    
    this.menuSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Instructions: shoot = space bar | move left = left arrow | move right = right arrow | *important* enjoy at your own risk', this.menuSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene