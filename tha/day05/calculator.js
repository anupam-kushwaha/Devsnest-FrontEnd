function getHistory() {
    return document.getElementsById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
printHistory("29-29");