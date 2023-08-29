async function setupCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({'audio': false, 'video': true});
	const video = document.getElementById('webcam');
  video.srcObject = stream;
}

async function startCapture(){
  await setupCamera();
  const deviceInfos = await navigator.mediaDevices.enumerateDevices();
	deviceInfos.forEach(deviceInfo=>{
		console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
	})
	const constraints = await navigator.mediaDevices.getSupportedConstraints();
	for (const [key, value] of Object.entries(constraints)) {
    console.log(`${key}: ${value}`);
  }
  navigator.mediaDevices.ondevicechange = function(event) {
    console.log("ondevicechange", event)
  }
}

window.onload = function(){
  startCapture()
};
