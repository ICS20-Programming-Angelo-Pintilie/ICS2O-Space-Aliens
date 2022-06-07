/* global Phaser */

// Copyright (c) 2020 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: June 2022
// Modified by: Angelo Pintilie
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'

// Create a variable holds the splashScene file
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()

//* Setup for game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade:{
      debug: true
    }
  },
  // Set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // We place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// Load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)

// Start title
game.scene.start('splashScene')
