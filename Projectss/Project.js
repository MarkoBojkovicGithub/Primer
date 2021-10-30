var topMove = 200;
var leftMove = 200;
var movement = 40;





document.addEventListener("mousemove", function(e) {
    document.getElementById("UserDo").style.top = e.y - 45 + "px";
    document.getElementById("UserDo").style.left = e.x - 45 + "px";


});




function MoveUpperSheild() {
    topMove += movement;
    document.getElementById("Runner").style.top = topMove + "px";
}

function MoveLowerSheild() {
    topMove -= movement;
    document.getElementById("Runner").style.top = topMove + "px";
}

function MoveLeftSheild() {
    leftMove += movement;
    document.getElementById("Runner").style.left = leftMove + "px";
}

function MoveRigthSheild() {
    leftMove -= movement;
    document.getElementById("Runner").style.left = leftMove + "px";
}

function MoveTopLeftSheild() {
    topMove += movement / 2;
    leftMove += movement / 2;
    document.getElementById("Runner").style.top = topMove + "px";
    document.getElementById("Runner").style.left = leftMove + "px";
}

function MoveTopRightSheild() {
    topMove += movement / 2;
    leftMove -= movement / 2;
    document.getElementById("Runner").style.top = topMove + "px";
    document.getElementById("Runner").style.left = leftMove + "px";
}

function MoveBottomLeftSheild() {
    topMove -= movement / 2;
    leftMove += movement / 2;
    document.getElementById("Runner").style.top = topMove + "px";
    document.getElementById("Runner").style.left = leftMove + "px";
}

function MoveBottomRightSheild() {
    topMove -= movement / 2;
    leftMove -= movement / 2;
    document.getElementById("Runner").style.top = topMove + "px";
    document.getElementById("Runner").style.left = leftMove + "px";
}