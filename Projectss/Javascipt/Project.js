var helper = 0;
var rowElements = new Array();

function CheckIt() {
    var text = document.getElementById("inputValue").value;
    rowElements.push(text.slice(0, 10));
    document.getElementById("inputValue").value = "";
}

function CheckIt2() {
    rowElements.join(" and ");
    console.log(rowElements.toString());
    document.getElementById("resultParagraph").innerHTML = rowElements.join(" and ").toString();
}