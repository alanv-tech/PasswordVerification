let cond = true
let correctpwd = "blob";

while (true) {
  let inputpwd = prompt("Please enter the password\n", "");
  if (inputPWD == false) {
    break;
  }
  if (inputpwd == null || inputpwd == "") {
    alert("Please enter a valid password");
  } else if (inputpwd == correctpwd) {
    alert("Correct password, please continue");
    break;
  } else {
    alert("Incorrect password");
    continue;
  }
}
