song = "";
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function preload(){
    song = loadSound("ColorExplosion.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop(){
    song.stop();
}
function draw(){
    image(video, 0, 0, 600, 500);
}