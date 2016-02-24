var server = null;
var port = 3001;
var appRoot = './public';

function Uint8ArrayToStr(buf) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    if (buf) {
      out += String.fromCharCode.apply(null, new Uint8Array(buf));
    }

    return out;
}

function init() {
  var info = navigator.mozWifiManager.connectionInformation || {};
  var ip = info.ipAddress || '';

  var closeBtn = document.getElementById('close');
  closeBtn.innerHTML = ip;
  closeBtn.addEventListener('click', function() {
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

  server.get("/xhrpost", function xhrres(req, res, oncomplete){
    console.log('POST:' + req);
    console.log('POST CONTENT:' + Uint8ArrayToStr(req.bodyBuffer));
    var ret = Math.random() < .3 ? 'post:mmm' : 'post:nnn';
    res.write(ret); // not send?
    oncomplete();
  });

  server.start(port);
}

addEventListener('load', init);

