var number = 0;

function CreateButton() {
    number++;
    var buttonHelper = `<button onclick='removeButton(${number})' id='${number}button'>${number}</button>`;
    var divHelper = document.getElementById("divMain");
    divHelper.innerHTML += buttonHelper;


}

function removeButton(name) {
    document.getElementById(`${name}button`).style.display = "none";
}