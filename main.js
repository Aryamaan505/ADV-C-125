nose_x=0;
nose_y=0;
difference=0;
right_wrist=0;
left_wrist=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(560,510);
    canvas=createCanvas(560,510);
    canvas.position(570,160);
    poseNet=ml5.poseNet(video,ModelLoaded);
poseNet.on('pose',Gotposes);
}

function ModelLoaded(){
    console.log("PoseNet Loaded");
}

function Gotposes(results){
    if (results.length>0) {
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose_x="+nose_x+"nose_y="+nose_y);
    left_wrist=results[0].pose.left_wrist.x;
    right_wrist=results[0].pose.right_wrist.x;
    difference=floor(left_wrist-right_wrist);
    console.log("left wrist_x="+left_wrist+"right wrist_x="+right_wrist+"difference="+difference);
    }
}

function draw() {
    background("salmon");
    fill("grey");
    stroke("grey");
    square(nose_x,nose_y,difference);
    document.getElementById("square_dimention").innerHTML="width and height of a square will be"+difference+"px";
}