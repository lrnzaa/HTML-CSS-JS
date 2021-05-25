//Create a canvas object from HTML element.
var canvas = document.getElementById('canvas');
//Create a 2D drawing object.
var ctx = canvas.getContext('2d');
//Calculate the clock radius by using the height.
var radius = canvas.height / 2;
//Remap the x and y axis to the center of the canvas.
ctx.translate(radius, radius);
//Reduce clock radius by 90%
radius = radius * 0.90;

setInterval(drawClock, 1000); //run drawClock function every second.

function drawClock()
{
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius)
{
    var grad;

    //draw white circle for the face
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "White";
    ctx.fill();

    //Create a radial gradient (inner, middle, and outer edge of clock)
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, '#b8ffb3'); //outer color
    grad.addColorStop(1, '#333');

    //Define gradient as stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    //Draw the center of the clock (number and center color)
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#0c2715';
    ctx.fill();
}

function drawNumbers(ctx, radius)
{
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial"; // set font at 15% of radius
    ctx.textBaseline = "middle"; //set text alignment to middle
    ctx.textAlign = "center"; //set text alignment to center

    for(num = 1; num < 13; num++)
    {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius)
{
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    //hour
    hour = hour % 12;
    //calculate angle of hour hand
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    //make hour hand 50% of canvas's radius
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    
    //minute
    //calculate angle of minute hand
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    //make minute hand 80% of canvas's radius
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);

    //second
    //calculate angle of second hand
    second = (second * Math.PI / 30);
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width)
{
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}