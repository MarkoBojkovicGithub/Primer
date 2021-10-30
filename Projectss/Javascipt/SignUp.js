//location.href = "Login.html";
var doneUserName = false;
var donePasword = false;
var doneEmail = false;
var donePhone = false;
var headDiv = document.getElementById("inputValue");
var users = 1;
///////////////Effect

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


///////////////Value of input

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

///////////////Button

function SendInfo() {
    var user = {
        Username: document.getElementById("username").value,
        Pasword: document.getElementById('pasword').value,
        Email: document.getElementById('email').value,
        Phone: document.getElementById('phone').value
    }
    let name = "User" + users;
    if (donePasword == true && doneUserName == true && doneEmail == true && donePhone == true) {
        window.alert("Done");
        localStorage.setItem('Users', users);
        users++;
        localStorage.setItem(name, JSON.stringify(user));
        document.getElementById('username').value = "";
        document.getElementById("pasword").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("username").style.borderColor = "rgb(228, 221, 221)";
        document.getElementById("pasword").style.borderColor = "rgb(228, 221, 221)";
        document.getElementById("email").style.borderColor = "rgb(228, 221, 221)";
        document.getElementById("phone").style.borderColor = "rgb(228, 221, 221)";
        doneUserName = false;
        donePasword = false;
        doneEmail = false;
        donePhone = false;
    } else {
        if (donePasword == false) {
            document.getElementById("paswordPlaceHolder").innerHTML = "Pasword must have 4 characters";
            document.getElementById("paswordPlaceHolder").style.visibility = "visible";
        }
        if (doneUserName == false) {
            document.getElementById("usernamePlaceHolder").innerHTML = "Username must have 8 characters";
            document.getElementById("usernamePlaceHolder").style.visibility = "visible";
        }
        if (donePhone == false) {
            document.getElementById("phonePlaceHolder").innerHTML = "Wrong number";
            document.getElementById("phonePlaceHolder").style.visibility = "visible";
        }
        if (doneEmail == false) {
            document.getElementById("emailPlaceHolder").innerHTML = "Wrong email";
            document.getElementById("emailPlaceHolder").style.visibility = "visible";
        }
        window.alert("Must type correct");
    }
}

//////////////input

function EmailText() {
    let helper = document.getElementById("email").value;
    if (CheckEmail(helper) == 1) {
        document.getElementById("emailPlaceHolder").innerHTML = "Wrong email";
        document.getElementById("emailPlaceHolder").style.visibility = "visible";
        doneEmail = false;
        document.getElementById("email").style.borderColor = "red";
    } else {
        document.getElementById("emailPlaceHolder").style.visibility = "hidden";
        doneEmail = true;
        document.getElementById("email").style.borderColor = "rgba(0,100,20,0.4)";
    }
    if (helper.length == 0) {
        document.getElementById("email").style.borderColor = "rgb(228, 221, 221)";
        doneEmail = false;
        document.getElementById("emailPlaceHolder").style.visibility = "hidden";
    }


}

/////////////CheckEmail

function CheckEmail(email) {
    let counterSign = 0;
    console.log("kurac");
    for (let helper of email) { /////////////////Not meny @@@@
        if (helper == "@") {
            counterSign++;
        }
    }
    if (counterSign > 1 || counterSign == 0) {
        return 1;
    }
    if (email.substr(email.length - 4, email.length) != ".com") { ///////////////last .com
        return 1;
    }

    for (let i = 0; i < email.length; i++) { ////////////Not meny ..
        if (email[i] == ".") {
            if (email[i + 1] == ".") {
                return 1;
            }
        }
    }
    let helper2 = email.indexOf("@");
    if (helper2 == 0) {
        return 1;
    }
    try {
        if (email[helper2 + 1] == "." || email[helper2 - 1] == ".") {
            return 1;
        }
    } catch (errorText) {
        console.log(errorText);
    }



}

function phoneText() {
    let numberError = false;
    let helper = document.getElementById("phone").value;
    if (helper.startsWith("+381")) {
        for (let helperNumber = 1; helperNumber < helper.length; helperNumber++) {
            if (isNaN(helper[helperNumber])) {
                numberError = true;
            }
        }
        if (numberError == true || helper.length != 13) {
            console.log("aa");
            document.getElementById("phonePlaceHolder").innerHTML = "Wrong number";
            document.getElementById("phonePlaceHolder").style.visibility = "visible";
            donePhone = false;
            document.getElementById("phone").style.borderColor = "red";
        } else {
            document.getElementById("phonePlaceHolder").style.visibility = "hidden";
            donePhone = true;
            document.getElementById("phone").style.borderColor = "rgba(0,100,20,0.4)";
        }

    } else {
        if (helper.startsWith("06")) {
            for (let helperNumber = 0; helperNumber < helper.length; helperNumber++) {
                if (isNaN(helper[helperNumber])) {
                    numberError = true;
                }
            }
            if (numberError == true || helper.length != 10) {
                console.log("aa");
                document.getElementById("phonePlaceHolder").innerHTML = "Wrong number";
                document.getElementById("phonePlaceHolder").style.visibility = "visible";
                donePhone = false;
                document.getElementById("phone").style.borderColor = "red";
            } else {
                document.getElementById("phonePlaceHolder").style.visibility = "hidden";
                donePhone = true;
                document.getElementById("phone").style.borderColor = "rgba(0,100,20,0.4)";
            }
        } else {
            document.getElementById("phonePlaceHolder").innerHTML = "Wrong number";
            document.getElementById("phonePlaceHolder").style.visibility = "visible";
            donePhone = false;
            document.getElementById("phone").style.borderColor = "red";
        }
        if (helper.length == 0) {
            document.getElementById("phone").style.borderColor = "rgb(228, 221, 221)";
            donePhone = false;
            document.getElementById("phonePlaceHolder").style.visibility = "hidden";
        }
    }
}