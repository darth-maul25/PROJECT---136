status_1="";
function setup(){
    canvas = createCanvas(400,350)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,350);
}
function modelLoaded(){
    console.log("Model is Loaded");
    status_1 = true;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting objects";
}
