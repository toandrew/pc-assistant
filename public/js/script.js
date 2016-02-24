window.onload = function() {
  var t = document.getElementById('time');
  setInterval(function() {
    t.innerHTML = '' + (new Date());

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/xhr?ppp=' + (new Date()), true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log('xhr response!' + xhr.response);
        }
      };
	};

    try {
      xhr.send(null);
    } catch (e) {
      console.log('XMLHttpRequest GET send exception:' + e);
    }

 //    var formData = new FormData();
	// formData.append("data[tumblelog]", "drunknight");
	// formData.append("data[source]", "FOLLOW_SOURCE_REBLOG");

    var xhrPost = new XMLHttpRequest();
    xhrPost.open('POST', '/xhrpost?date=' + (new Date()), true);
    //xhrPost.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhrPost.onreadystatechange = function() {
      if (xhrPost.readyState == 4) {
        if (xhrPost.status == 200) {
          console.log('xhrPost response!' + xhrPost.response);
        }
      };
	};

    try {
      xhrPost.send("fname=Bill&lname=Gatesss");
      //xhrPost.send(formData);
    } catch (e) {
      console.log('XMLHttpRequest POST send exception:' + e);
    }
  }, 5000);
}
