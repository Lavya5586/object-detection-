img = "";
status = "";

function preload()
{
    loadImage = "livingroom.jpg";
}

function setup()
{
    canvas = createCanvas(450, 350);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
    console.log("Model is loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log();
}