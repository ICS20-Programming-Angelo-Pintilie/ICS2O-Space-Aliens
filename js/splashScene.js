/* global Phaser */

// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })

    this.splashSceneBackgroundImage = null
  }
    //setting background to white
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }
    //calling image from image file
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './images/splashSceneImage.png')
  }
    //dimensions of image
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
    //time in which the screen will switch to title scene
  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
