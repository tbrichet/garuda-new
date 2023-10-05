// StickyNav

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

//Specialties - Collapsible Function

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Scheduling Form Submissions

var modal = document.getElementById("errorModal");
var span = document.getElementsByClassName("close")[0];

document.getElementById("schedule-button").addEventListener("click", residentCheck);

function residentCheck() {
  if (document.getElementById("resident").checked) {
    formDirect();
  }
  else {
    formError();
  }
}

//Error - Not a Resident of Georgia or Florida
function formError() {
  modal.style.display = "block";
}

//Close Error Modal - X
span.onclick = function() {
  modal.style.display = "none";
}

// Close Error Modal - Click Outside Box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Direct to Correct Scheduling Page
function formDirect() {
  //Insurance Pay
  if (document.getElementById("insurance").checked) {
    window.open(
      "https://headway.co/providers/abilash-pulicken", "_blank");
  }
  //Cash Pay New Patient
  else if (document.getElementById("newpatient").checked) {
    window.open(
      "https://abilash-pulicken.clientsecure.me/request/service", "_blank");
  }
  //Cash Pay Existing Patient
  else if (document.getElementById("cash").checked){
    window.open(
      "https://abilash-pulicken.clientsecure.me/sign-in", "_blank");
  }
  else {
    alert("Please indicate your payment method")
  }
}