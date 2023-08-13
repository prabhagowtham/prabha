

document.addEventListener("DOMContentLoaded",function(){
  let form = document.getElementById("form");

  function validateEmail(){
    let email = document.getElementById("email");
    let validEmail =/^[A-Za-z0-9_.]+\@[a-z]+\.[a-z]+$/

    if(email.value == ""){
      alert("Please enter Email");
      return false;
    } 
    if(!validEmail.test(email.value)){
      alert("Please enter valid Email address");
      return false;
    }
    else{
      return true;
    }
  }

  function validatePassword(){
    let password = document.getElementById("password");
    let validPassword = /^((?=.*[A-Z])+(?=.*[a-z])+(?=.*[0-9])+(?=.*[!@#$%^&*]).{8,})+$/

    if(password.value ==""){
      alert("Please enter the Password");
      return false;
    }
    if(!validPassword.test(password.value)){
      alert("Please enter atleast one uppercase,one lowercase, one number and one special character");
      return false;
    }
    else{
      return true;
    }
  }

  form.addEventListener("submit",function(event){
    event.preventDefault();

    let emailValid = validateEmail();
    let passwordValid = validatePassword();

    if(emailValid && passwordValid){
      event.target.submit();
    }

  });
});