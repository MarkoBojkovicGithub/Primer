var doneUserName = false;
var donePasword = false;
var headDiv = document.getElementById("inputValue");
setTimeout(() => {
    headDiv.style.top = 25 + "vh";
    headDiv.style.transitionDuration = 900 + "ms";
    headDiv.style.visibility = "visible";

}, 1000)
setTimeout(() => {
    headDiv.style.top = 12 + "vh";
    headDiv.style.transitionDuration = 500 + "ms";

}, 1500)
setTimeout(() => {
    headDiv.style.top = 25 + "vh";
    headDiv.style.transitionDuration = 900 + "ms";

}, 2000)
setTimeout(() => {
    headDiv.style.top = 17 + "vh";
    headDiv.style.transitionDuration = 700 + "ms";

}, 2400)
setTimeout(() => {
    headDiv.style.top = 20 + "vh";
    headDiv.style.transitionDuration = 600 + "ms";

}, 2700)

function usernameText() {
    let helper = document.getElementById("username").value;
    if (helper.length < 8) {
        document.getElementById("usernamePlaceHolder").innerHTML = "Username must have 8 characters";
        document.getElementById("usernamePlaceHolder").style.visibility = "visible";
        doneUserName = false;
    } else {
        document.getElementById("usernamePlaceHolder").style.visibility = "hidden";
        doneUserName = true;

    }
}

function paswordText() {
    let helper = document.getElementById("pasword").value;
    if (helper.length < 4) {
        document.getElementById("paswordPlaceHolder").innerHTML = "Pasword must have 4 characters";
        document.getElementById("paswordPlaceHolder").style.visibility = "visible";
        donePasword = false;
    } else {
        document.getElementById("paswordPlaceHolder").style.visibility = "hidden";
        donePasword = true;
    }

}

function SendInfo() {
    if (donePasword == true && doneUserName == true) {
        window.alert("Done");
        localStorage.setItem('UserName', document.getElementById("username").value);
        localStorage.setItem('Pasword', document.getElementById('pasword').value);
        document.getElementById('username').value = "";
        document.getElementById("pasword").value = "";
        doneUserName = false;
        donePasword = false;
    } else {
        window.alert("Must type correct");
    }
}