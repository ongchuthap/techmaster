function myFunction(x) {
  x.classList.toggle("change");
  let apperance = document.getElementById("menubar").style;
  if (apperance.display == "") {
    apperance.display = "block";
  } else if (apperance.display == "block") {
    apperance.display = "";
  } else if (apperance.display == "flex") {
    apperance.display = "";
  }
}
