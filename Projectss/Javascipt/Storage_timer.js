function mouseOverBall() {
    var helper = document.getElementById("baseball-icon");
    helper.style.backgroundColor = "blue";
    helper.style.transitionDuration = "500ms";
}

function mouseLeaveBall() {
    var helper = document.getElementById("baseball-icon");
    helper.style.backgroundColor = "white";
    helper.style.transitionDuration = "1ms";

}
var helperColor1 = 10;
setTimeout(() => {

    setInterval(() => {
        document.getElementById("textDiv").innerHTML += `<p style="background-color:rgba(0,${helperColor1},0,1)"> tekst</p>`;
        helperColor1 += 20;
        document.getElementById("bodyDiv").style.backgroundColor = "rgba(0,0," + (255 - helperColor1) + ",1)";
    }, 1000);
}, 5000);

function SaveText() {
    localStorage.setItem('username', 'nesto');
    localStorage.setItem('pasword', 'aaa');
}

function GetText() {
    console.log('kurac');
    let text1 = localStorage.getItem('username');
    let text2 = localStorage.getItem('pasword');
    window.alert(text1 + text2);
}