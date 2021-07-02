let row = "<tr>";

for (i = 0; i < 6; i++) {
  // row += '<td><i class="material-icons">person</i></td>';
  row += '<td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">person</i></a>';
}



row += "</tr>";
let content = "";

for (i = 0; i < 6; i++) {
  content += row;
}

document.getElementById("tab").innerHTML = content;

let empty_seat = 36;
let filled_seat = 0;

document.getElementById("show_availble").innerHTML = "" + empty_seat;
document.getElementById("show_occupied").innerHTML = "" + filled_seat;

let box = document.querySelectorAll("i");
console.log(box);

box.forEach((link) => {
  link.addEventListener("click", function () {
    console.log(link);

    if (link.classList.contains("seatfilled")) {
      link.classList.remove("seatfilled");
      link.innerHTML = "person";
      empty_seat++;
      filled_seat--;
      document.getElementById("show_availble").innerHTML = "" + empty_seat;
      document.getElementById("show_occupied").innerHTML = "" + filled_seat;
    } else {
      link.classList.add("seatfilled");
      link.innerHTML = "person_off";
      filled_seat++;
      empty_seat--;
      document.getElementById("show_availble").innerHTML = "" + empty_seat;
      document.getElementById("show_occupied").innerHTML = "" + filled_seat;
    }
  });
});
