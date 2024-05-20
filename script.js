document.addEventListener("DOMContentLoaded", function() {
  let menu = document.querySelector("#menu");
  let navbar = document.querySelector(".navbar");

  if (menu && navbar) {
      menu.onclick = () => {
          menu.classList.toggle("fa-times");
          navbar.classList.toggle("active");
      };

      window.onscroll = () => {
          menu.classList.remove("fa-times");
          navbar.classList.remove("active");
      };
  } else {
      console.error("Menu or navbar element not found.");
  }
});


function changenav_background() {
  let header = document.getElementById("header");
  let scrollvalue = window.scrollY;

  if (scrollvalue > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", changenav_background);

// // JavaScript code for registration
// const users = [];

// function register() {
//   var newUsername = document.getElementById("new-username").value;
//   var newPassword = document.getElementById("new-password").value;

//   // Check if username already exists
//   for (var i = 0; i < users.length; i++) {
//     if (newUsername === users[i].username) {
//       alert("Username already exists. Please choose another one.");
//       return;
//     }
//   }

//   // If username doesn't exist, add new user
//   users.push({ username: newUsername, password: newPassword });
//   alert("Registration successful!");
// }

// // JavaScript code for login
// function login() {
//   var newusername = document.getElementById("username").value;
//   var newpassword = document.getElementById("password").value;
//   var valid = false;

//   // Check if entered credentials match any registered user
//   for (var i = 0; i < users.length; i++) {
//     if (newusername === users[i].username && newpassword === users[i].password) {
//       valid = true;
//       break;
//     }
//   }

//   if (valid) {
//     alert("Login successful!");
//     // Redirect to course.html upon successful login
//     window.location.href = "course.html";
//   } else {
//     alert("Invalid username or password. Please try again.");
//   }
// }
