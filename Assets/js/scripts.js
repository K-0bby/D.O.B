
// const username = document.getElementById("name");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const signUp = document.getElementById("sign-up");
// const signIn = document.getElementById("sign-in");

// const usernameError = document.getElementById("name_error");
// const emailError = document.getElementById("email_error");
// const passwordError = document.getElementById("password_error");


// signUp.addEventListener('submit', (e) => {

//   // let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9\_\-\.])+\.([A-Za-z]{2,4})$/

//   if (username.value === '' || username.value == null) {
//     e.preventDefault();
//     usernameError.textContent = 'Please enter a valid name';
//   }
//   if (!email.value.match(emailCheck)) {
//     e.preventDefault();
//     emailError.textContent = 'Please enter a valid email';
//   }

//   if (password.value.length <= 6) {
//     e.preventDefault();
//     passwordError.textContent = 'Password must be atleast 6 characters long';
//   } else if (password.value.length >= 20) {
//     e.preventDefault();
//     passwordError.textContent = 'Password cannot be more than 20 characters long';
//   } else if (password.value === 'password') {
//     e.preventDefault();
//     passwordError.textContent = 'Password cannot be password';
//   }

// });

// signIn.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9\_\-\.])+\.([A-Za-z]{2,4})$/

//   if (email.value.match(emailCheck) && password.value === 'password') {
//     alert("Login successful");
//     window.location.pathname = "/Pages/index.html";
//   } else {
//     alert("Invalid username or password");
//   }

// });



document.addEventListener('DOMContentLoaded', function () {
  const signUpForm = document.getElementById("sign-up");
  const signInForm = document.getElementById("sign-in");

  // Sign up form submission
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Store sign-up details in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to sign-in page
    window.location.href = "/Pages/Sign-in.html";
  });

  // Sign in form submission
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get stored sign-up details from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Get form values
    const signInEmail = document.getElementById("email").value;
    const signInPassword = document.getElementById("password").value;

    // Compare sign-in details with stored details
    if (signInEmail === storedEmail && signInPassword === storedPassword) {
      // Redirect to index page
      window.location.href = "/Pages/index.html";
    } else {
      // Invalid credentials
      alert("Invalid email or password");
    }
  });
});


// form.addEventListener("submit", function (event) {
//   let isValid = true;
//   // usernameError.textContent = "";
//   emailError.textContent = "";
//   passwordError.textContent = "";

//   // if (username.value.trim() === "") {
//   //   isValid = false;
//   //   usernameError.textContent = "Please enter a valid username";
//   // }

//   if (!email.value.match(/^\S+@\S+\.\S+$/)) {
//     isValid = false;
//     emailError.textContent = "Please enter a valid email";
//   }

//   if (password.value.length < 6) {
//     isValid = false;
//     passwordError.textContent = "Password must be at least 6 characters long";
//   }

//   if (isValid) {
//     // Perform your authentication logic here
//     alert("Login successful"); // Replace this with your actual authentication logic
//     // Redirect to home page
//     window.location.href = "/Pages/index.html";
//   } else {
//     event.preventDefault();
//     alert("Invalid username or password");
//   }


// });








//   const addOccurrence = () => {
//     // Get form values
//     const id = document.querySelector("#id").value;
//     const category = document.querySelector("#category").value;
//     const timeDate = document.querySelector("#time-date").value;
//     const occurrence = document.querySelector("#occurrence").value;
//     const name = document.querySelector("#name").value;

//     // Create new row for the table
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `
//       <td>${id}</td>
//       <td>${name}</td>
//       <td class="align-middle text-center">${category}</td>
//       <td class="align-middle text-center">${timeDate}</td>
//       <td class="align-middle">${occurrence}</td>
//     `;

//     // Append the new row to the table body
//     const tableBody = document.querySelector("#recordsList tbody");
//     tableBody.appendChild(newRow);

//     // Clear form fields
//     document.querySelector("#id").value = "";
//     document.querySelector("#category").value = "";
//     document.querySelector("#time-date").value = "";
//     document.querySelector("#occurrence").value = "";
//     document.querySelector("#name").value = "";
//   }
