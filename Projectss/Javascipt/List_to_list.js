var helperNumber = 0;
var ObjectCar = {
    name: "Kurac",
    longS: 10
};
var cars = ["nisan", "opel", "aaa", "sta_aa"];
cars.push("aaa2");
cars.push("nesto");
var html = `<ul>`;
for (let i = 0; i < cars.length; i++) {
    html += `<li class='colorLi' id='${cars[i]}b' onclick='writet(${cars[i]}b)'>${cars[i]}</li>`;
    helperNumber++;
}
html += `</ul>`;

document.getElementById("par1").innerHTML = html;

function writet(helper) {
    console.log(helper);
    writeNew(helper.innerText);
}

function writeNew(pom) {
    console.log(pom);
    if (helperNumber <= 0) {
        window.alert("OUT OF SPACE, LIMIT ON PURCHES")
    } else {
        document.getElementById("newList").innerHTML += `<li class='colorLiChecked'>${pom}</li>`;
        helperNumber--;
    }
}