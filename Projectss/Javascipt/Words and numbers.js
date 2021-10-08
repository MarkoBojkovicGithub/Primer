var helper = 0;
var rowElements = new Array();
var numbersRow = new Array();


/////////some text
function CheckIt() {
    var text = document.getElementById("inputValue").value;
    rowElements.push(text.slice(0, 10));
    document.getElementById("inputValue").value = "";
    document.getElementById("resultParagraph").innerHTML = "";
}

function CheckIt2() {
    rowElements.join(" and ");
    console.log(rowElements.toString());
    document.getElementById("resultParagraph").innerHTML = rowElements.join(" and ").toString();
    rowElements = new Array();
}



////////////Numbers
function CheckNumbers() {
    numbersRow.push(document.getElementById("inputValue2").value);
    document.getElementById('inputValue2').value = "";
    document.getElementById('resultNumber').innerHTML = "";

}

function sortIt() {
    numbersRow.sort(function(a, b) { return a - b });
    document.getElementById('resultNumber').innerHTML += numbersRow.join(" ");
    numbersRow = new Array();
}