process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
	//treść do odczytania w chwili wejscia 
	process.stdout.write("1. exit \n2. node version \n");
	var input= process.stdin.read();
	if(input !== null){
		var instruction=input.toString().trim();
			// if(instruction == "exit"){
			// 	process.stdout.write("closing application \n");
			// 	process.exit();
			// } else {
			// 	process.stderr.write("wrong instruction! \n");
			// }
			switch (instruction){

				case "exit":
				process.stdout.write("closing application \n");
				process.exit();
				break;

				case "node version":
				var version= require('./modules/nodeVersion');
				break;

				
			}


		// process.stdout.write(input);
	}
	
});