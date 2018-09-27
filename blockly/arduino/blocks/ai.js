'use strict';

goog.provide('Blockly.Blocks.ai');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks.ai.HUE = 330;

Blockly.Blocks['ai_recognize'] = {
	  init: function() {
		      this.appendDummyInput()
		          .appendField(new Blockly.FieldTextInput("模型1"), "model_name")
		          .appendField("识别");
		      this.appendValueInput("switch_data")
		          .setCheck(null)
		          .setAlign(Blockly.ALIGN_RIGHT)
		          .appendField("输入");
		      this.appendDummyInput()
		          .appendField("类别")
		          .appendField(new Blockly.FieldTextInput("标签1"), "label1_name");
		      this.appendStatementInput("action1")
		          .setCheck(null);
		      this.appendDummyInput()
		          .appendField("类别")
		          .appendField(new Blockly.FieldTextInput("标签2"), "label2_name");
		      this.appendStatementInput("action2")
		          .setCheck(null);
		      this.setInputsInline(false);
		      this.setPreviousStatement(true, null);
		      this.setNextStatement(true, null);
		      this.setColour(330);
		   this.setTooltip("");
		   this.setHelpUrl("");
		    }
};

Blockly.Blocks['ai_input_image'] = {
	  init: function() {
		      this.appendDummyInput()
		          .appendField("从")
		          .appendField(new Blockly.FieldDropdown([["内置摄像头","webcam"], ["USB摄像头","usbcam"], ["URL","url"]]), "image_source")
		          .appendField("获取图片");
		      this.setOutput(true, null);
		      this.setColour(330);
		   this.setTooltip("");
		   this.setHelpUrl("");
		    }
};

Blockly.Blocks['ai_train'] = {
	  init: function() {
		      this.appendDummyInput()
		          .appendField("机器学习训练")
		          .appendField(new Blockly.FieldTextInput("模型1"), "model_name");
		      this.appendValueInput("train_source")
		          .setCheck(null)
		          .setAlign(Blockly.ALIGN_RIGHT)
		          .appendField("训练开关");
		      this.appendValueInput("train_data")
		          .setCheck(null)
		          .setAlign(Blockly.ALIGN_RIGHT)
		          .appendField("输入");
		      this.appendValueInput("train_label")
		          .setCheck(null)
		          .setAlign(Blockly.ALIGN_RIGHT)
		          .appendField("类别")
		          .appendField(new Blockly.FieldTextInput("标签"), "label_name");
		      this.setPreviousStatement(true, null);
		      this.setNextStatement(true, null);
		      this.setColour(330);
		   this.setTooltip("");
		   this.setHelpUrl("");
		    }
};

Blockly.Blocks['ai_face_detect'] = {
	  init: function() {
		      this.appendDummyInput()
		          .appendField("人脸检测");
		      this.appendValueInput("input_image")
		          .setCheck(null)
		          .setAlign(Blockly.ALIGN_RIGHT)
		          .appendField("图像");
		      this.setOutput(true, null);
		      this.setColour(330);
		   this.setTooltip("");
		   this.setHelpUrl("");
		    }
};

Blockly.Blocks['sensor_accelerometer'] = {
	  init: function() {
		      this.appendDummyInput()
		          .appendField("读加速度计");
		      this.setOutput(true, "Array");
		      this.setColour(230);
		   this.setTooltip("");
		   this.setHelpUrl("");
		    }
};

Blockly.Blocks['ai_recognize_to_3'] = {
	  init: function() {
		      this.appendDummyInput()
		          .appendField(new Blockly.FieldTextInput("模型1"), "module_name")
		          .appendField("识别");
		      this.appendValueInput("switch_data")
		          .setCheck(null)
		          .setAlign(Blockly.ALIGN_RIGHT)
		          .appendField("输入");
		      this.appendDummyInput()
		          .appendField("类别")
		          .appendField(new Blockly.FieldTextInput("标签1"), "label1_name");
		      this.appendStatementInput("action1")
		          .setCheck(null);
		      this.appendDummyInput()
		          .appendField("类别")
		          .appendField(new Blockly.FieldTextInput("标签2"), "label2_name");
		      this.appendStatementInput("action2")
		          .setCheck(null);
		      this.appendDummyInput()
		          .appendField("类别")
		          .appendField(new Blockly.FieldTextInput("标签3"), "label3_name");
		      this.appendStatementInput("action3")
		          .setCheck(null);
		      this.setInputsInline(false);
		      this.setPreviousStatement(true, null);
		      this.setNextStatement(true, null);
		      this.setColour(330);
		   this.setTooltip("");
		   this.setHelpUrl("");
		    }
};
