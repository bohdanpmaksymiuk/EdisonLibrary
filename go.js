var sleep = require('system-sleep');
var mraa = require('mraa');
var pin0 = new mraa.Gpio(0);
var pin1 = new mraa.Gpio(1);
var pin2 = new mraa.Gpio(2);
var pin3 = new mraa.Gpio(3);

pin0.dir(mraa.DIR_OUT);
pin1.dir(mraa.DIR_OUT);
pin2.dir(mraa.DIR_OUT);
pin3.dir(mraa.DIR_OUT);

function setMotor(a,b,c,d) {
pin0.write(a);
pin1.write(b);
pin2.write(c);
pin3.write(d);
sleep(1);
}

var i = 512;
while (i >0 )
{
    setMotor(1,0,0,0);
    setMotor(1,1,0,0);
    setMotor(0,1,0,0);
    setMotor(0,1,1,0);
    setMotor(0,0,1,0);
    setMotor(0,0,1,1);
    setMotor(0,0,0,1);
    setMotor(1,0,0,1);
    console.log(i);
    i=i-1;
}
setMotor(0,0,0,0); 

