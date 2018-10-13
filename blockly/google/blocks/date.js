'use strict';

goog.provide('Blockly.Blocks.Date');
goog.provide('Blockly.Constants.Date');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Date.HUE = Blockly.Constants.Math.HUE;

Blockly.Blocks['current_hour'] = {
  init: function() {
    this.setColour(Blockly.Constants.Date.HUE);
    this.appendDummyInput()
        .appendField("现在是几点");
    this.setOutput(true);
  }
};
