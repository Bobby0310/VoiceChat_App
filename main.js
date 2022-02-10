var SpeechRecongnition=window.webkitSpeechRecognition;
var Recognition= new SpeechRecongnition;

function start(){
    document.getElementById("Boxtext").innerHTML="";
    Recognition.start();
}

Recognition.onresult= function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;

    document.getElementById("Boxtext").innerHTML=Content;
  
    console.log(Content);

    if(Content=="take my selfie"){
        console.log("Taking Selfie");
    speak();
    }
}
function speak(){
    var Api_Store=window.speechSynthesis;
    var Speak_Data="this weird device will be taking your selfie in 5 seconds";
    var say=new SpeechSynthesisUtterance(Speak_Data);
    Api_Store.speak(say);
    Webcam.attach(camer);
    setTimeout(
        function(){
            snapshot();
            save();
        },4789
        );

}
camer=document.getElementById("Camera")
Webcam.set({
    width:295,
    height:295,
    image_format:"jpeg",
    jpeg_quality:101
});

function snapshot(){

    Webcam.snap(
        function (data_uri){
            document.getElementById("Output").innerHTML='<img id="picture" src="'+data_uri+'">';
        }
    );
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("picture").src;
    link.href=image
    link.click()
}