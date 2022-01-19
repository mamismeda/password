let passToggle = document.querySelector("#passtoggle");
let password = document.querySelector("#password");

passToggle.addEventListener("click", function(el){

    let type = password.getAttribute('type') == 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList.toggle("bi-eye");
})

let forma = document.querySelector("form");
forma.addEventListener('submit', function (el) {

    el.preventDefault();
});

password.onfocus = function(){
    document.getElementById("msg").style.display = "block";
}
password.onblur = function(){
    document.getElementById("msg").style.display = "none"
}

password.onkeyup = function(){

    if (password.value.length >= 8 ) {
        members.classList.remove("inavlid")
        members.classList.add("valid");
    }else{
        members.classList.remove("valid");
        members.classList.add("invalid");
    }

    let upperCaseLetter = /[A-Z]/g;

    if(password.value.match(upperCaseLetter)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

    let numberMargin = /[0-9]/g;
    
    if(password.value.match(numberMargin)){
        numy.classList.remove("invalid");
        numy.classList.add("valid");
    }else {
        numy.classList.remove("valid");
        numy.classList.add("invalid");
    }

    let specSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (password.value.match(specSymbol)) {
        specy.classList.remove("invalid");
        specy.classList.add("valid");
        passToggle.classList.remove("invalid");
        passToggle.classList.add("valid");
    }else{
        specy.classList.remove("valid");
        specy.classList.add("invalid");
        passToggle.classList.remove("valid");
        passToggle.classList.add("invalid");
    }

}