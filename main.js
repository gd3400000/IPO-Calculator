// CS10 Grade Calculator

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let num1 = +document.getElementById("num1-in").value;
  let num2 = document.getElementById("num2-in").value;
  let num3 = document.getElementById("num3-in").value;
  // Process
  let total = (num2 * 1.5 + num1) * num3;

  // Output
  document.getElementById("Output").innerHTML = total;
}
