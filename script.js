async function startCapture(){
  const stream = await navigator.mediaDevices.getUserMedia({'audio': false, 'video': true});
	const video = document.getElementById('webcam');
  video.srcObject = stream;
}

window.onload = function(){
  startCapture()
};
