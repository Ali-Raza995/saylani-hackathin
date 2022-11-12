// Your web app's Firebase configuration
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxwbNcYdPiYau8b-tHk4mRPIdH3onNpzo",
    authDomain: "saylanihackathon-f026c.firebaseapp.com",
    projectId: "saylanihackathon-f026c",
    storageBucket: "saylanihackathon-f026c.appspot.com",
    messagingSenderId: "168082347704",
    appId: "1:168082347704:web:213b1eeb37fb4a1bc6c64d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize variables for Authentication and Database -----------------
const auth = firebase.auth();
const database = firebase.database();


// ----------------------- Login Functionality ---------------------

function login() {
  // Fetch All Input values given by User 

  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Please All Fields Required !!");
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      // DOne
      alert("User Logged In!!");

      // ---------- Refer to Next Page -----------------

      location.href="./adminCreate.html"
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}


// ---------------- Email Validation Using Regex --------------

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

// -------------- Firebase Validation ------------------

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
