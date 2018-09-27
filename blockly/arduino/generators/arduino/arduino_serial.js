'use strict';

goog.provide('Blockly.Arduino.arduino_serial');

goog.require('Blockly.Arduino');

Blockly.Arduino['serial_speed'] = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_speed = this.getFieldValue('SPEED');
  Blockly.Arduino.setups_['serial_begin' + dropdown_pin ] = 'Serial'+ dropdown_pin +'.begin(' + dropdown_speed + ');';
 // Blockly.Arduino.setups_['serial_begin'] = 'Serial.begin(' + dropdown_speed + ');' ;
   var code = '';
  return code;
};

Blockly.Arduino['serial_print'] = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');

  //Blockly.Arduino.setups_['setup_serial_' + dropdown_pin] = 'Serial.begin(' + profile.default.serial + ');\n';

  var code = 'Serial'+ dropdown_pin +'.println(' + content + ');\n';
  return code;
};

Blockly.Arduino['serial_read'] = function() {
  // TODO: Assemble Python into code variable.
    var dropdown_pin = this.getFieldValue('PIN');
    var code = 'Serial'+ dropdown_pin +'.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_available'] = function() {
  // TODO: Assemble Python into code variable.
  var dropdown_pin = this.getFieldValue('PIN');
    var code = 'Serial'+ dropdown_pin +'.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_write'] = function() {
   var dropdown_pin = this.getFieldValue('PIN');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  var code = 'Serial'+ dropdown_pin +'.write('+content+');\n';  //ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['LM35_temporature_sensor'] = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  //var code = 'analogRead('+dropdown_pin+')*0.0048828125*100';
    var code = '(125*analogRead('+dropdown_pin+'))>>8'
   //var code = 'round( 1/(log((float)(1023-analogRead('+dropdown_pin.substring(1,2)+'))*10000/analogRead('+dropdown_pin.substring(1,2)+')/10000)/3975+1/298.15)-273.15'+')';

  //var code = 'round('+'1/(log((float)(1023-analogRead('+dropdown_pin+'))*10000/analogRead('+dropdown_pin+')/10000)/3975+1/298.15)-273.15'+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*Blockly.Blocks['DS18B20_temporature_sensor'] = function() {
  var dropdown_pin = this.getFieldValue('PIN');

  //引用onewire和Dallstemperature的库
  Blockly.Arduino.definitions_['define_OneWire'] = '#include <OneWire.h>\n';
  Blockly.Arduino.definitions_['define_DallasTemperature'] = '#include <DallasTemperature.h>\n';

  //定义变量
  Blockly.Arduino.definitions_['OneWire'+dropdown_pin] = 'OneWire oneWire' + '('+dropdown_pin+');\n';
  Blockly.Arduino.definitions_['DallasTemperature'] = 'DallasTemperature sensors(&oneWire);\n';

    Blockly.Arduino.setups_['sensors_begin'] = 'sensors.begin();\n';

  var code = 'sensors.requestTemperatures();\n';
    code +='sensors.getTempCByIndex(0);';

  return code;
};*/

// Blockly.Arduino['soft_init'] = function(block) {
//   var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
//   var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
//   var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
//   var dropdown_speed = this.getFieldValue('SPEED');
//   //Blockly.Arduino.includes_['define_ss'] = '#include <SoftwareSerial.h>';
//   Blockly.Arduino.definitions_['define_ss_'+dropdown_name] = 'Serial '+dropdown_name+'('+dropdown_pin1+','+dropdown_pin2+');';
//   Blockly.Arduino.setups_['setup_serial_'+dropdown_name] = dropdown_name+'.begin(' + dropdown_speed + ');' ;
//   var code = '';
//   return code;
// };

Blockly.Arduino['serial_printfor'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
  //Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.println('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};




// Blockly.Arduino.serial_print = function() {
//   var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
//   //content = content.replace('(','').replace(')','');
//   var code = 'Serial.print(' + content + ');\n';
//   return code;
// };

Blockly.Arduino.serial_print_tab = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  var code = 'Serial.print(' + content + ');\nSerial.print("\\t");\n';
  return code;
};

Blockly.Arduino.serial_println = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  var code = 'Serial.println(' + content + ');\n';
  return code;
};

// Ajouté par LP2I le 07/02/16
Blockly.Arduino.serial_print_var = function() {
  var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var new_line = Blockly.Arduino.valueToCode(this, 'NEW_LINE', Blockly.Arduino.ORDER_ATOMIC);
  if (new_line =="true")
	{
		var code =  'Serial.print('+value_text+');\n Serial.println('+value_n+');\n';
	}
	else
	{
		var code =  'Serial.print(' + value_text + ');\n Serial.print('+value_n+');\n';
	}
  return code;
};



Blockly.Arduino['serial_write_out'] = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'valeur', Blockly.Arduino.ORDER_NONE);	
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'Serial.write('+value_num+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_flush'] = function() {
  var code = 'Serial.flush();\n';
  return code;
};