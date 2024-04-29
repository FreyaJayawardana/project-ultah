const heart = document.getElementById("heart");
const alert = document.getElementById("alert");
const nextBtn = document.getElementById("nextBtn");
const req1 = document.getElementById("req1");
const pass = document.getElementById("pass");
const trueName = "Gilang";
const trueName2 = "gilang";
pass.addEventListener("keyup", function () {
  if (pass.value == trueName || pass.value == trueName2) {
    heart.style.color = "red";
    req1.style.display = "block";
    nextBtn.style.display = "block";
    alert.style.display = "none";
  } else {
    heart.style.color = "white";
    alert.style.display = "block";
    nextBtn.style.display = "none";
    req1.style.display = "none";
  }
});
function GantiGambar() {
  var image = document.getElementById("Balonku");
  if (image.src.match("lamp-on")) {
    image.src = "./img/lamp-off.gif";
  } else {
    image.src = "./img/lamp-on.gif";
  }
}

// let docT = document.title;
// window.addEventListener("blur", () => {
//   document.title = "sini cok";
// });
// window.addEventListener("focus", () => {
//   document.title = docT;
// });

// let docT = document.title;
// var c = 0;
// function judul() {
//   document.title = docT.substring(0, c);
//   if (c == docT.length) {
//     c = 0;
//     setTimeout("judul()", 1000);
//   } else {
//     c++;
//     setTimeout("judul()", 200);
//   }
// }
// judul();
