document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value.trim();
  const robotChecked = document.getElementById("robot").checked;

  if (!robotChecked) {
    alert("Please verify you're not a robot.");
    return;
  }

  // Simulated submission
  alert(`Thank you ${name}, your application for "${course}" has been submitted!`);

  // Optionally, reset the form
  document.getElementById("admissionForm").reset();
});

function closeForm() {
  document.querySelector(".form-container").style.display = "none";
}
