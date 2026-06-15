const eye = document.querySelector(".eye");
const password = document.querySelector("#password");

eye.addEventListener("click", () => {

if(password.type === "password"){

password.type = "text";
eye.classList.replace("fa-eye","fa-eye-slash");

}else{

password.type = "password";
eye.classList.replace("fa-eye-slash","fa-eye");

}

});