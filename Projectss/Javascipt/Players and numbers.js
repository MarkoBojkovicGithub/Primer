var ArrayElements = [];
var ArrayNumbers = [];

function clickButton() {
    var storageValue = document.getElementById("input").value;
    ArrayElements.push(storageValue);
    document.getElementById("input").value = "";
}


///////////Filter

function checkValue() {
    ArrayElements = ArrayElements.filter(filterIt);
    addElement();
    document.getElementById("result").innerHTML = ArrayElements.join(" and ");
}

function filterIt(value, index, array) {
    return value.length > 3;
}

///////Concat

function addElement() {
    ArrayElements = ArrayElements.map(MapValue);
}

function MapValue(value, index, array) {
    return "legioner " + value + " ";
}

/////////////Numbers


function clickButtonNumbers() {
    ArrayNumbers.push(document.getElementById("input2").value);
    document.getElementById("input2").value = "";
}


//////////Filter


function checkValueNumbers() {
    let list = ArrayNumbers.some(findWrong);
    if (list == true) {
        document.getElementById("resultTh").innerHTML = "Wrong number ";
        document.getElementById("resultTh").innerHTML += ArrayNumbers.find(FindValue);
    } else {
        document.getElementById("resultTh").innerHTML = " Elements " + ArrayNumbers.join(" ");
    }
}

function findWrong(value, index, array) {
    return value < 5;
}

function FindValue(value, index, array) {
    return value < 5;
}