//https://teachablemachine.withgoogle.com/models/ENGz8UDuT/
Webcam.set({
    width: 360,
    height: 270,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("Camera");
Webcam.attach("#camera");

function Take_Snappy() {
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML="<img id='Capture_Image' src="+data_uri+">";
    });
}

console.log("ml5.version:",ml5.version);
Image_Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ENGz8UDuT/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model Loaded");
}

function Check() {
    img=document.getElementById("Capture_Image");
    Image_Classifier.classify(img,GotResult);
}

function GotResult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("Object_Name").innerHTML=results[0].label;
        document.getElementById("AccNumber").innerHTML=results[0].confidence.toFixed(3);
    }
}