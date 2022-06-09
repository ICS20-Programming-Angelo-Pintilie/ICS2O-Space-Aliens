/* global Phaser */

// Copyright (c) 2022 Angelo Pinilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {

  //create a ufo
  createUfo () {
    const aUfo = this.physics.add.sprite(100, 100, 'ufo')
    this.ufoGroup.add(aUfo)
    
  }
  
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
  }
    //background set to white
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    
    //star backdrop image, spaceship image and missle image
    this.load.image('starBackground', './images/starBackground.png')
    this.load.image('ship', './images/spaceShip.png')
    this.load.image('missile', './images/missile.png')
    this.load.image('ufo', './images/ufo.png')
    //sound for missle shot
    this.load.audio('laser', './sounds/missileNoise.wav')
    
  }
    //dimensions for screen
  create (data) {
    this.background = this.add.sprite(0, 0, 'starBackground').setScale(2.00)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1000 - 100, 'ship')
    
    // create group for missles
    this.missileGroup = this.physics.add.group()

    // create group for aliens/ufos 
    this.ufoGroup = this.add.group()
    this.createUfo()
  }

  update (time, delta) {
    //called 60times a second

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    //code to move ship left
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    //code to move ship right
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        //fire a missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }  
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }  
    })  
  }
}
export default GameScene