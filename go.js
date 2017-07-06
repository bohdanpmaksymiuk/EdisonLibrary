var mraa = require('mraa');
var pin0 = new mraa.Gpio(0);
var pin1 = new mraa.Gpio(1);
var pin2 = new mraa.Gpio(2);
var pin3 = new mraa.Gpio(3);

pin0.dir(mraa.DIR_OUT);
pin0.write(1);
pin1.dir(mraa.DIR_OUT);
pin1.write(0);
pin2.dir(mraa.DIR_OUT);
pin2.write(1);
pin3.dir(mraa.DIR_OUT);
pin3.write(0); 
