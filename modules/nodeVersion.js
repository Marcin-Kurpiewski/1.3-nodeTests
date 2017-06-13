function showNodeVersion(){

	console.log("Node version: " + process.versions.node);
	console.log("System LAnguage: " + process.env.LANG);
};

exports.nodeVersion= showNodeVersion();