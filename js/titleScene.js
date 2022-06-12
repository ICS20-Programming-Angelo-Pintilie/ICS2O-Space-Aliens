/* global Phaser */

// Copyright (c) 2022 Angelo Pinilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '150px Times', fill: '#8B0000', align: 'center' }
  }
    //setting background to white
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
    //calling image from image file
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', 'images/STTITLE.jpg')
  }
    //dimensions of screen
  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, "Eleven's Eggo Launcher", this.titleSceneTextStyle).setOrigin(0.5)
  }
    //time in which screen will switch to menu screen
  update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene
