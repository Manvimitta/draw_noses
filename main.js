noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/sfKCQkX0/dot-background-image-design-joy-studio-design-gallery-best-28.png');
}

function setup() {
    canvas = createCanvas(550, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 250);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);

    image(clown_nose, noseX, noseY, 30, 30)
};

function take_snapshot() {
    save('filter_image.png');
}