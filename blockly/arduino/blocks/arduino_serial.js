/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.arduino_serial');

goog.require('Blockly.Blocks');
//goog.require('Blockly.Types');


/**
 * Common HSV hue for all blocks in this category.
 */

 Blockly.Blocks['serial_speed'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
	      .appendField("Serial")
	      .appendField(new Blockly.FieldDropdown([['', ''], ['1', '1'], ['2', '2'],['3', '3']]), "PIN")
      	.appendField("SPEED")
      	.appendField(new Blockly.FieldDropdown([['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']]), "SPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Serial communication init speed');
  }
};

 Blockly.Blocks['serial_print'] = {
  //helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
	      .appendField("Serial")
	      .appendField(new Blockly.FieldDropdown([['', ''], ['1', '1'], ['2', '2'],['3', '3']]), "PIN")
            .appendField("Print");
    this.appendValueInput("CONTENT", 'String')
        //.appendField("Print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
  }
};

 Blockly.Blocks['serial_read'] = {
  init: function() {
    this.setColour(20);
	//this.setHelpUrl('http://arduino.cc/en/Serial/read');
	this.appendDummyInput("")
	    .appendField("Serial")
	    .appendField(new Blockly.FieldDropdown([['', ''], ['1', '1'], ['2', '2'],['3', '3']]), "PIN")
	    .appendField("read");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Reads incoming serial data. ');
  }
};

 Blockly.Blocks['serial_available'] = {
  init: function() {
    this.setColour(20);
	this.setHelpUrl('http://arduino.cc/en/Serial/available');
	this.appendDummyInput("")
	   .appendField("Serial")
	    .appendField(new Blockly.FieldDropdown([['', ''], ['1', '1'], ['2', '2'],['3', '3']]), "PIN")
	    .appendField("available");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Get the number of bytes (characters) available for reading from the serial port. This is data that s already arrived and stored in the serial receive buffer (which holds 64 bytes). ');
  }
};

 Blockly.Blocks['serial_write'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField("Serial")
	    .appendField(new Blockly.FieldDropdown([['', ''], ['1', '1'], ['2', '2'],['3', '3']]), "PIN")
	    .appendField("write");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes to send the characters representing the digits of a number use the print() function instead. ');
  }
};

 Blockly.Blocks['LM35_temporature_sensor'] = {
  //helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("LM35 Sensor PIN#")
        .appendField(new Blockly.FieldImage("../../blocks/grove/LM35.png", 64, 64))
        .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('return number of ambient temperature in ℃');
  }
};

Blockly.Blocks['sensor_accelerometer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("读加速度计");
    this.setOutput(true, "Array");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

 /* Blockly.Blocks['DS18B20_temporature_sensor'] = {
  //helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField("DS18B20 Sensor PIN#")
        .appendField(new Blockly.FieldImage("../../blocks/grove/ds18b20.jpg", 64, 64))
        //.appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};*/

//  Blockly.Blocks['soft_init'] = {
//   init: function() {
//     this.setColour(Blockly.Blocks.arduino_softserial.HUE);
// 	this.setHelpUrl('https://www.arduino.cc/en/Reference/SoftwareSerial');
// 	//only arduino mega admit multi softserial connection
// 	// if (window.profile.defaultBoard != window.profile["mega"]) {
// 	// 	this.appendDummyInput()
// 	// 		.appendField(Blockly.Msg.SSERIAL_Init)
// 	// 		.appendField(
// 	// 			new Blockly.FieldInstance('SoftSerial',
// 	// 									  Blockly.Msg.SSERIAL_DEFAULT_NAME,
// 	// 									  true, true, false),
// 	// 			'SOFTSERIAL_NAME');
// 	// } else {
// 	// 	this.appendDummyInput()
// 	// 		.appendField(Blockly.Msg.SSERIAL_Init)
// 	// 		.appendField(
// 	// 			new Blockly.FieldInstance('SoftSerial',
// 	// 									  Blockly.Msg.SSERIAL_DEFAULT_NAME,
// 	// 									  true, false, false),
// 	// 			'SOFTSERIAL_NAME');
// 	// 	};
//     this.appendValueInput("PIN1")
//         .setAlign(Blockly.ALIGN_RIGHT)
// 		.setCheck('Number')
//         .appendField(Blockly.Msg.SSERIAL_RX);
//     this.appendValueInput("PIN2")
//         .setAlign(Blockly.ALIGN_RIGHT)
// 		.setCheck('Number')
//         .appendField(Blockly.Msg.SSERIAL_TX);
//     this.appendDummyInput()
// 	    .appendField(Blockly.Msg.SSERIAL_SPEED)
//      	.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serial), "SPEED");
//     this.setInputsInline(false);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('A call to SoftwareSerial(rxPin, txPin) creates a new SoftwareSerial object');
//   }
// };
 
Blockly.Blocks['serial_printfor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/Println');
	this.setInputsInline(true);
    this.appendValueInput("CONTENT")
        .setCheck('Number')
        .appendField(Blockly.Msg.Serial_Print_Format)
     	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Serial_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial_Print_ForHexa, "HEX"],[Blockly.Msg.Serial_Print_ForBin, "BIN"],[Blockly.Msg.Serial_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port with a specific format.');
  }
};





// Blockly.Blocks['serial_print'] = {
//   init: function() {
//     this.setColour(Blockly.Blocks.arduino_serial.HUE);
// 	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
//     this.appendValueInput("CONTENT")
// 		.setCheck('String')
//         .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
//   }
// };

Blockly.Blocks['serial_print_tab'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_TAB_CONTENT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_println'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINTLN_CONTENT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_print_var'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("Text")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_TEXT);		
	this.appendValueInput("N")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NUMBER);			
	this.appendValueInput("NEW_LINE")
		.setCheck('Boolean') 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NEW_LINE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};




Blockly.Blocks['serial_write_out'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
    this.appendValueInput("valeur")
		.setCheck('String')		
        .appendField(Blockly.Msg.Serial_write_out);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes; to send the characters representing the digits of a number use the print() function instead.');
  }
};

Blockly.Blocks['serial_flush'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/Flush');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.Serial_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Waits for the transmission of outgoing serial data to complete.');
  }
};
