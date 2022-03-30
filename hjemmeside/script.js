document
  .getElementById("contact-form")
  .addEventListener("submit", validateForm);
  const templateParams = {};

function validateForm(event) {
  event.preventDefault();
  console.log("submitted");
  // 1st step: Hente alle input felter
  const elements = document.getElementsByClassName("need-validation");
  console.log(elements);
  // 2nd step: loope henover alle input felter
  for (let element of elements) {
    if (element.type == "text" || element.type == "textarea") {
      textValidation(element);
    } else if (element.type == "email") {
      emailValidation(element);
    }
  }

  //check systemet

  function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
} }  }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }