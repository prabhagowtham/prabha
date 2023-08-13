document.addEventListener("DOMContentLoaded",function(){
    let loginForm = document.getElementById("login-form");

    function validateLoginEmail(){
        let loginEmail =  document.getElementById("login-email");
        let validLoginEmail = /^[A-Za-z0-9_.]+\@[a-z]+\.[a-z]+$/
     

        if(loginEmail.value == ""){
            alert("Please Enter Email");
            return false;
        }
        if(!validLoginEmail.test(loginEmail.value)){
            alert("Please Enter Valid Email Address");
            return false;
        }
        else{
            return true;
        }
    }

    function validateLoginPassword(){
        let loginPassword = document.getElementById("login-password");
        let validLoginPassword = /^((?=.*[A-z])+(?=.*[a-z])+(?=.*[0-9])+(?=.*[!@#$%^&*()]).{8,})+$/

        if(loginPassword.value == ""){
            alert("Please Enter Password");
            // return false;
        }
        if(!validLoginPassword.test(loginPassword.value)){
            alert("Password should contain minimum 8 characters with atleast one uppercase , one lowercase , one number and one special character");
            document.getElementById("login-password").value="";
           
            
        }
        // else{
        //     return true;
        // }
    }

    loginForm.addEventListener("submit",function(event){
        event.preventDefault();

        let loginEmailValid = validateLoginEmail();
        let loginPasswordValid = validateLoginPassword();

        if(loginEmailValid && loginPasswordValid){
            event.target.submit();
        }
    })
})