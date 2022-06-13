/* global Phaser */

// Copyright (c) 2022 Angelo Pinilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {

  //create a demogorgon
  createDemo () {
    const demoXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920;
    let demoXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50;
    demoXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
    const aDemo = this.physics.add.sprite(demoXLocation, 100, 'demo')
    aDemo.body.velocity.y = 200
    aDemo.body.velocity.x = demoXVelocity
    this.demoGroup.add(aDemo)
    
  }
  
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
    //score counter
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
    //game over text
    this.gameOverText = null
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
  }
    //background set to white
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    
    //star backdrop image, spaceship image and missle image
    this.load.image('upsideDown', './images/UDBACKGROUND.jpg')
    this.load.image('ship', './images/El.png')
    this.load.image('waffle', './images/waffle.png')
    this.load.image('demo', './images/demogorgon.png')
    //sound for missle shot
    this.load.audio('laser', './sounds/missileNoise.wav')
    this.load.audio('explosion', './sounds/ufoExplosion.wav')
    this.load.audio('bomb', './sounds/bomb.wav')
    
  }
    //dimensions for screen
  create (data) {
    this.background = this.add.sprite(0, 0, 'upsideDown').setScale(2.00)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    this.ship = this.physics.add.sprite(1920 / 2, 1000 - 100, 'ship')
    
    // create group for missles
    this.waffleGroup = this.physics.add.group()

    // create group for aliens/ufos 
    this.demoGroup = this.add.group()
    this.createDemo()

    // collisions between missles and ufos
    this.physics.add.collider(this.waffleGroup, this.demoGroup, function (waffleCollide, demoCollide) {
      demoCollide.destroy()
      waffleCollide.destroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createDemo()
      this.createDemo()
    }.bind(this))

    // Collisions between ship and demogorgons
    this.physics.add.collider(this.ship, this.demoGroup, function (shipCollide, demoCollide) {
      this.sound.play('bomb')
      this.physics.pause()
      demoCollide.destroy()
      shipCollide.destroy()
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true })
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      this.score = 0
    }.bind(this))
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
      if (this.fireWaffle === false) {
        //fire a missile
        this.fireWaffle = true
        const aNewWaffle = this.physics.add.sprite(this.ship.x, this.ship.y, 'waffle')
        this.waffleGroup.add(aNewWaffle)
        this.sound.play('laser')
      }  
    }

    if (keySpaceObj.isUp === true) {
      this.fireWaffle = false
    }

    this.waffleGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }  
    })  
  }
}
export default GameScene