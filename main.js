noseX=0;
noseY=0;

difference=0;

leftWristx=0;
rightWristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");

}
function draw(){
    background('#42bff5');
    document.getElementById("square_sides").innerHTML="Width and the height of the sqare will be ="+difference+"px";
    fill('#03fcbe');
    stroke('#03fcbe');
    square(noseX,noseY,difference);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+ noseX+ " noseY= "+ noseY);

        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("leftWristx= " + leftWristx +" rightWristx= "+ rightWristx);
        console.log("difference= "+difference);
    }
}
