var os = require('os');
var colors = require('colors');


function getOSinfo(){
	var type = os.type();
	var release = os.release();
		if(type === 'Darwin') {
   			type = 'OSX';
		} else if(type === 'Windows_NT') {
    		type = 'Windows';
		}
		console.log(colors.green('System:'), type);
		console.log(colors.red('Release:'), release);
	var cpu = os.cpus()[0].model;
		console.log(colors.blue('CPU model:'), cpu);
	var uptime = os.uptime();
		console.log(colors.cyan('Uptime: ~'), (uptime / 60).toFixed(0), 'min');
	var userInfo = os.userInfo();
		console.log(colors.magenta('User name:'), userInfo.username);
		console.log(colors.random('Home dir:'), userInfo.homedir);
}

exports.printInfo = getOSinfo();
