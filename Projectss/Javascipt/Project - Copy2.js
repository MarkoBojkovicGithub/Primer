var text2 = "";
var rowElements = [3, 4, 2, 2];
var resultE;
var copyElements;

copyElements = rowElements.map(doCopy);
resultE = copyElements.reduce(doIt2);
resultE = resultE - rowElements[0];
document.getElementById('par1').innerHTML = resultE;

function doIt2(total, value, index, array) {
    return total - value;
}

function doCopy(value, index, array) {
    if (index == 0) {
        return 0;
    } else {
        return value;
    }
}