let correctpwd = "blob";
let inputpwd = prompt("Please enter your name\n", "");
if (inputpwd == null || inputpwd == "") {
  console.log("Please enter a password");
} else if (inputpwd == correctpwd) {
  alert("Correct");
} else {
    alert("Incorrect");
}
