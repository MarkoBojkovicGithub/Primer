var helper = 0;

function CheckIt() {
    var text = document.getElementById("inputValue").value;
    ///////////words
    if (text.includes("kurwa") || text.includes("idiots") || text.includes("idiot") || text.includes("morons") || text.includes("moron") || text.includes("shits") || text.includes("shit") || text.includes("fuck")) {
        helper++;
        console.log(helper);
    }
    text = text.replace(/KURWA/gi, "*****");
    text = text.replace(/IDIOTS/gi, "*****");
    text = text.replace(/morons/gi, "***");
    text = text.replace(/shits/gi, "***");
    text = text.replace(/fuck/gi, "***");
    text = text.replace(/shit/gi, "***");
    text = text.replace(/idiot/gi, "***");
    text = text.replace(/moron/gi, "***");
    document.getElementById("resultParagraph").innerHTML += text + "<br>";
    document.getElementById("inputValue").value = "";
    if (helper == 3) {
        window.alert("Too meny not welcome text");
        helper = 0;
    }
}