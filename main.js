previsao1="";
previsao2="";

Webcam.set({
    width:350,
    height:300,
    pngFormat:"png",
    pngQuality:90
});
                                                                                
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot()  {
Webcam.snap(function(data_uri){
    document.getElementById("resultado").innerHTML='<img id="capturar"src="'+data_uri+'"/>';
});    
}
console.log("ml5 version ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/etINQBPwi/model.json',modelLoaded);
function modelLoaded() {
    console.log("modelLoaded");
}
function speak() {
    var synth=window.speechSynthesis;
    speakData1="A primeira previsão é "+precisao1;
    speakData2="A segunda previsão é "+precisao2;
    var falar=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(falar);
}