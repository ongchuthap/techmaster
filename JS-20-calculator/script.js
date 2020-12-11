function showMath(id) {
  document.getElementById("result").innerText = document.getElementById("result").innerText + document.getElementById(id).innerText;
}
function showResult() {
  let result = document.getElementById("result").innerText;
  result = result.replaceAll("÷", "/");
  result = result.replaceAll("x", "*");
  result = result.replaceAll("−", "-");
  result = result.replaceAll("+", "+");
  document.getElementById("result").innerText = eval(result);
}
function del() {
  document.getElementById("result").innerText = "";
}
function play() {
  document.getElementById("scream").play();
}
function bomb()
{
  document.getElementById("bomb").play();
}
function displayPicture()
{
  document.getElementById( 'quote' ).innerText = "";
  document.getElementById( "img" ).style.display = "inline-block";
}