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


// dropdown open/close functioning 

// dropMenu = document.querySelectorAll("dropdown-menu");

// function closeDropdown() {
//   dropMenu.classList.remove("show");
// }

// $('#btnFilter').click(function() {
//   $(this).parents('.dropdown').find('button.dropdown-toggle').dropdown('toggle')
// });
