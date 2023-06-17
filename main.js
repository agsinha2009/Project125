PositionX=0;
PositionY=0;
difference=0;

rightWrist=0;
leftWrist=0;

function setup(){
    video=createCapture(VIDEO)
    video.size(550,450)
    video.position(100,220)
    canvas=createCanvas(650,550)
    canvas.position(700,180);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is initialized")
}


function gotPoses(results){
    if(results.length > 0){
       console.log(results);
       PositionX=results[0].pose.nose.x-40;
       PositionY=results[0].pose.nose.y-40;
       leftWrist=results[0].pose.leftWrist.x;
       rightWrist=results[0].pose.rightWrist.x;
       difference=Math.floor(leftWrist-rightWrist);
    
       console.log("Position x="+PositionX+" and position y="+PositionY);


      
    }
}

function draw(){
    background('black');
    fill("red");
    textSize(difference);
    text("ashish",PositionX,PositionY);
}