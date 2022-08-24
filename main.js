function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotposes)
}
function em() {
    save("gnihtyna.png") 
}
function draw() {
    image(video, 0,0,300,300)
    fill( 255, 0, 0)
    stroke( 255, 0, 0)
    circle(noseX, noseY, 20)
    image(img, noseX-30, noseY-30, 60, 60)
}
function modelloaded() {
    console.log("poseNet is initialized")
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("nosex= " + results[0].pose.nose.x)
        console.log("nosey= " + results[0].pose.nose.y)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}
function preload() {
    img=loadImage("https://i.postimg.cc/7P04g6p3/Clown-nose-large.webp")
}
noseX=0;
noseY=0;
