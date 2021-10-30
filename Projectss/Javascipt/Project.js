var pickUp = false;

function ChangePositionBox1() {
    setInterval(() => {
        document.addEventListener("mousemove", function(e) {
            document.getElementById("Box1").style.position = "fixed";
            document.getElementById("Box1").style.top = e.y - 40 + "px";
            document.getElementById("Box1").style.left = e.x - 40 + "px";
            pickUp = true;
        });
    }, 100);
}

function CheckPick() {

}