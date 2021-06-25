function getHistory() {
    return document.getElementById("history").innerText;
}
alert(getHistory());
function printHistory(num) {
    document.getElementById("history").innerText = num;
}
printHistory("slslslllllllll")

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    document.getElementById("output-value").innerText = num;
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        alert("This operator clicked:"+ this.id);
    });
}