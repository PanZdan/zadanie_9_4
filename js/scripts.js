// // scripts.js


function drawTree(n) {
	for (var i = 0; i < n; i++) {
		var line = '';
		for (var j = 0; j < (n - i); j++) {
			line += 'O';
		}
		var star = '';
		for (var k = 0; k <= i * 2; k++) {
			star += '*';
		}
		console.log(line, star);
	} 
}
drawTree(5);