var front=false;
var video=document.getElementById("video");
var constraints = { video: { facingMode: (front? "user" : "environment"), width: 640, height: 480  } };
navigator.mediaDevices.getUserMedia(constraints)
.then(function (mediaStream) {
    video.srcObject=mediaStream;
    video.onloadedmetadata=function (e) {
        video.play();
        
    }
    
})
