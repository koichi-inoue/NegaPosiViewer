navigator.getUserMedia = navigator.getUserMedia
    || navigator.webkitGetUserMedia
    || navigator.mozGetUserMedia;

window.URL = window.URL || window.webkitURL;

let webcam = document.getElementById('webcam');
let localStream = null;

navigator.getUserMedia( {video: true, audio: false}, success, error);

function success(stream) { // for success case
  webcam.srcObject = stream;
  console.log(stream);
}

function error(err) { // for error case
  console.log(err);
}
