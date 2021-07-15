noseX=0;
noseY=0;
function preload(){
moostache=loadImage("https://i.postimg.cc/9Fk0L9Wz/mustache.png");
}

function setup(){
    canvas = createCanvas(550,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    r = 255;
    g = 255;
    b = 255;
    border = true;
    whatevenisthis = 85;
    whatevenisthis2 = 90;
    texty=true;
    moostacheappear = true;
}

function draw(){
    background(r,g,b);
    image(video, 100, 100, 350, 300);
    if(moostacheappear===true){
    image(moostache, noseX, noseY, 125, 50);
    }
    if (key === "w" && keyIsPressed) {
        r = 255;
        g = 255;
        b = 255;
        fill(0);
    }
    if (key === "q" && keyIsPressed) {
        r = 0;
        g = 0;
        b = 0;
        fill(255);
    }
    if (key === "e" && keyIsPressed) {
        r = 255;
        g = 0;
        b = 0;
        fill(255,255,0);
    }
    if (key === "r" && keyIsPressed) {
        r = 0;
        g = 255;
        b = 0;
        fill(0,100,0);
    }
    if (key === "t" && keyIsPressed) {
        r = 0;
        g = 0;
        b = 255;
        fill(0,255,255);
    }
    if (key === "y" && keyIsPressed) {
        r = 255;
        g = 255;
        b = 0;
        fill(255,0,0);
    }
    if (key === "u" && keyIsPressed) {
        r = 0;
        g = 255;
        b = 255;
        fill(0,0,100);
    }
    if (key === "i" && keyIsPressed) {
        r = 50;
        g = 50;
        b = 50;
        fill(200,200,200);
    }
    if (key === "o" && keyIsPressed) {
        r = 156;
        g = 5;
        b = 50;
        fill(200,70,70);
    }
    if (key === "p" && keyIsPressed) {
        r = 5;
        g = 167;
        b = 50;
        fill(0,255,0);
    }
    if (key === "[" && keyIsPressed) {
        r = 5;
        g = 50;
        b = 167;
        fill(0,160,255);
    }
    if (key === "]" && keyIsPressed) {
        r = 255;
        g = 167;
        b = 167;
        fill(200,70,70);
    }
    textSize(50);
    noStroke();
    if(texty===true){
    text("My Photo", 175, whatevenisthis);
    }
    if(border===true){
    ellipse(50,0,150,150);
    ellipse(200,0,150,whatevenisthis2);
    ellipse(350,0,150,whatevenisthis2);
    ellipse(500,0,150,150);
    ellipse(50,500,150,150);
    ellipse(200,500,150,150);
    ellipse(350,500,150,150);
    ellipse(500,500,150,150);
    }


    if(key === "b" && keyIsPressed) {
        border=true;
        whatevenisthis=85;
    }
    if(key === "n" && keyIsPressed) {
        border=false;
        whatevenisthis=70;
    }
    if(key === "c" && keyIsPressed) {
        texty=true;
        whatevenisthis2 = 90;
    }
    if(key === "x" && keyIsPressed) {
        texty=false;
        whatevenisthis2 = 150;
    }
    if(key === "k" && keyIsPressed) {
        moostacheappear = false;
    }
    if(key === "l" && keyIsPressed) {
        moostacheappear = true;
    }
}

function take_snapshot(){
    save('my_filtered_selfie.png');
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results, error){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x+40;
        noseY=results[0].pose.nose.y+100;
        console.log("nose X = " + noseX);
        console.log("nose Y = " + noseY);
    }else{
        console.error(error);
    }
}