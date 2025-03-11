let correctpwd = "blob";
let inputpwd = prompt("Please the password\n", "");
if (inputpwd == null || inputpwd == "") {
  console.log("Please enter a password");
} else if (inputpwd == correctpwd) {
  alert("Correct password, please continue");
} else {
    alert("Incorrect password");
}
