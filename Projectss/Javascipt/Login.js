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
        document.getElementById("username").style.borderColor = "red";
    } else {
        document.getElementById("usernamePlaceHolder").style.visibility = "hidden";
        doneUserName = true;
        document.getElementById("username").style.borderColor = "rgba(0,100,20,0.4)";

    }
    if (helper.length == 0) {
        document.getElementById("username").style.borderColor = "rgb(228, 221, 221)";
        doneEmail = false;
        document.getElementById("usernamePlaceHolder").style.visibility = "hidden";
    }
}

function paswordText() {
    let helper = document.getElementById("pasword").value;
    if (helper.length < 4) {
        document.getElementById("paswordPlaceHolder").innerHTML = "Pasword must have 4 characters";
        document.getElementById("paswordPlaceHolder").style.visibility = "visible";
        donePasword = false;
        document.getElementById("pasword").style.borderColor = "red";
    } else {
        document.getElementById("paswordPlaceHolder").style.visibility = "hidden";
        donePasword = true;
        document.getElementById("pasword").style.borderColor = "rgba(0,100,20,0.4)";
    }
    if (helper.length == 0) {
        document.getElementById("pasword").style.borderColor = "rgb(228, 221, 221)";
        doneEmail = false;
        document.getElementById("paswordPlaceHolder").style.visibility = "hidden";
    }

}

function SendInfo() {
    /////////////////////Checking existing account

    let Users = localStorage.getItem('Users');
    var UsersList = [];
    let name;
    console.log(parseInt(localStorage.getItem("Users")));
    for (let i = 1; i <= parseInt(Users); i++) {
        name = "User" + i;
        UsersList.push(JSON.parse(localStorage.getItem(name)));
    }

    ///////////////////Correct email and password
    if (donePasword == true && doneUserName == true) {
        window.alert("Done");
        for (let j = 0; j < UsersList.length; j++) {
            if ((UsersList[j].Username == (document.getElementById("username").value)) && UsersList[j].Pasword == (document.getElementById("pasword").value)) {
                console.log("postoji");
            }
        }

        document.getElementById('username').value = "";
        document.getElementById("pasword").value = "";
        document.getElementById("username").style.borderColor = "rgb(228, 221, 221)";
        document.getElementById("pasword").style.borderColor = "rgb(228, 221, 221)";
        doneUserName = false;
        donePasword = false;
    } else {
        if (donePasword == false) {
            document.getElementById("paswordPlaceHolder").innerHTML = "Pasword must have 4 characters";
            document.getElementById("paswordPlaceHolder").style.visibility = "visible";
        }
        if (doneUserName == false) {
            document.getElementById("usernamePlaceHolder").innerHTML = "Username must have 8 characters";
            document.getElementById("usernamePlaceHolder").style.visibility = "visible";
        }
        window.alert("Must type correct");
    }
}