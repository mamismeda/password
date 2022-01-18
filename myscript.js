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