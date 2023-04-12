// header bg change js 

function scrollValue() {
  var navbar = document.querySelector('.navbar');
  var scroll = window.scrollY;
  if (scroll < 50) {
    navbar.classList.remove('BgColour');
  } else {
    navbar.classList.add('BgColour');
  }
}

window.addEventListener('scroll', scrollValue);


// slider js 

const login = document.getElementById("login");
const loginForm = document.querySelector(".loginBox");
const close = document.getElementById("close");


// login popup

login.addEventListener("click", () =>{
  loginForm.classList.add("open");
});


close.addEventListener("click", () =>{
  loginForm.classList.remove("open");
});

function closeDropdown() {
  document.getElementsByClassName('dropdown-menu search-dropdown-box show')[0].classList.remove('show');  
} 

// document.getElementsByClassName("accordion-button").addEventListener("click", function(event){
//   console.log("Eorking")
// })

console.log(document.getElementById("btnTxt"))

function myFunction(className) {
if(document.getElementsByClassName(className)[0].innerHTML == "open"){ 
  document.getElementsByClassName(className)[0].innerHTML = "close";
} else{
  document.getElementsByClassName(className)[0].innerHTML = "open"
}

}
