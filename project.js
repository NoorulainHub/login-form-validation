const inputs = document.querySelectorAll(".input");

function data() {
    var fullName = document.getElementById("n4").value;  
    var phoneNumber = document.getElementById("n1").value; 
    var password = document.getElementById("n2").value; 
    var confirmPassword = document.getElementById("n3").value;  
    
    var userError = document.getElementById("username");
    var phoneError = document.getElementById("phone");
    var passwordError = document.getElementById("password");
    var confirmPasswordError = document.getElementById("confirm");

    const numberPattern = /[0-9]/;

    
    if (fullName.includes(" ")) {
        userError.textContent = "Username should not contain spaces.";
        userError.style.display = "block";
        return false;
    }   else if (fullName.length < 4 || fullName.length > 15) {
        userError.textContent = "Username should be between 4 to 15 characters.";
        userError.style.display = "block";
        return false;
    }  else if (!numberPattern.test(fullName)) {
        userError.textContent = "username should contain atleast one number.";
        userError.style.display = "block";
        return false;
    }   else if (phoneNumber.length !== 11) {
        phoneError.textContent = "Phone number should contain exactly 11 characters.";
        phoneError.style.display = "block";
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password should be at least 8 characters long.";
        passwordError.style.display = "block";
        return false;
    } else if (!numberPattern.test(password)) {
        passwordError.textContent = "Password should contain at least one number.";
        passwordError.style.display = "block";
        return false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match. Please enter the same password.";
        confirmPasswordError.style.display = "block";
        return false;
    } else {
        return true;  
    }
}


function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}


inputs.forEach(input => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});



var modal = document.getElementById("surveyModal");
var openbtn = document.getElementById("openbtn");
var closeBtn = document.getElementsByClassName("close")[0];


if (openbtn) {
    openbtn.onclick = function() {
        modal.style.display = "block";
    }
}

if(closeBtn){
closeBtn.onclick = function() {
    modal.style.display = "none";
}
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var surveyForm = document.getElementById("surveyForm");
surveyForm.onsubmit = function(event) {
    event.preventDefault();
    modal.style.display = "none";
    window.location.href = "thank.html"; 
}