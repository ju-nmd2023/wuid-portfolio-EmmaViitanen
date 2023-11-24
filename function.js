document.getElementById("confirm-button").addEventListener("click", myFunction);

// The following 9 lines of code was adapted from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_confirm2 Accessed: 2023-11-24
function myFunction() {
  let text;
  if (confirm("Do you confirm?") == true) {
    text = "Message sent";
  } else {
    text = "Message canceled";
  }
  document.getElementById("demo").innerHTML = text;
}
