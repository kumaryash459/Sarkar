document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent. Thank you!");
});
 const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    //inquery from
  const inquiryBtn = document.getElementById("inquiryBtn");
const formModal = document.getElementById("formModal");
const closeModal = document.getElementById("closeModal");

// Show the form
inquiryBtn.addEventListener("click", () => {
  formModal.style.display = "block";
});

// Close the form
closeModal.addEventListener("click", () => {
  formModal.style.display = "none";
});

// Close form when clicking outside the modal
window.addEventListener("click", (e) => {
  if (e.target === formModal) {
    formModal.style.display = "none";
  }
});

// Form submission
document.getElementById("inquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value.trim();
  const robot = document.getElementById("robot").checked;

  if (!robot) {
    alert("Please verify you're not a robot.");
    return;
  }

  alert(`Thank you, ${name}. Your inquiry for "${course}" has been submitted.`);
  this.reset();
  formModal.style.display = "none";
});
// replace code start
 function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.course,
    new Date()
  ]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}



//replace code end
//update javaScript From
//const scriptURL = 'https://script.google.com/macros/s/AKfycbx-fRn-3itA-CxbjI41ViKFMh-kmZkdCuxBqn8C20bd-FV2Q4xs_VnURNQuGuGfccCZ/exec';

document.getElementById("inquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    course: document.getElementById("course").value.trim(),
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.text())
    .then(msg => {
      alert("Form submitted successfully!");
      document.getElementById("inquiryForm").reset();
      document.getElementById("formModal").style.display = "none";
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Submission failed. Try again later.");
    });
});
//------------- from--------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdbTXltSUavNyG_i0OCw6reWjHTxPBnQT2uCcve4aoymbam4dB-Z39j_XI5Db2ZSmu/exec';
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      mobile: form.mobile.value,
      course: form.course.value,
      message: form.message.value
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => alert("Form submitted successfully!"))
    .catch(error => alert("Error! " + error.message));
  });

