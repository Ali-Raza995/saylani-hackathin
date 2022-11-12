
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

var fullName, fname, RollNO, contact;

// ----------- Getting All Data From User Input ----------------
function readFom() {
  fullName = document.getElementById("fullName").value;
  fname = document.getElementById("fname").value;
  RollNO = document.getElementById("Roll_no").value;
  contact = document.getElementById("contact").value;
  console.log(fullName, fname, RollNO, contact);
}

document.getElementById("addStudent").onclick = function () {
  readFom();
    if (fullName=="") {
  alert("Please Out All fields")
}

else {
const db = firebase.firestore()
db.collection("users").add({
    name: fullName,
    fname: fname,
    Rollno: RollNO,
    contact: contact
})
alert("Data Added Succesfully")
}}

// ----------------- Create Class ----------------

document.getElementById("addClass").onclick = function () {
  readFom();
    if (fullName=="") {
  alert("Please Out All fields")
}

else {
const db = firebase.firestore()
db.collection("users").add({
    name: fullName,
    fname: fname,
    Rollno: RollNO,
    contact: contact
})
alert("Data Added Succesfully")
}}