var server = null;
var port = 3001;
var appRoot = './public';

function init() {
	//
	var close_btn = document.getElementById('close');
	close_btn.innerHTML = 'Close';
	close_btn.addEventListener('click', function() {
		window.close();
	});

	// prepare server
	server = new HttpServer();
	server.get("/", appRoot);
	server.get("/xhr", function xhrres(req, res, oncomplete){
		console.log(req);
		var ret = Math.random() < .3 ? 'xxx' : 'yyy';
		res.write(ret); // not send?
		oncomplete();
	});
	server.start(port);
}

addEventListener('load', init);

