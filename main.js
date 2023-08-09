noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    canvas = createCanvas(450, 400);
    canvas.position(560, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('I I N P !');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose X = "+noseX+" | nose Y = "+noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("L Wrist X = "+leftWristX+" | R Wrist X = "+rightWristX+" | difference = "+difference);
}

function draw() {
    document.getElementById("square_side").innerHTML = "Width and height of square is; "+difference+"in pixels";
    background('papayawhip');
    textSize('30px');
    fill('papayawhip');
    square(noseX, noseY, difference);
}