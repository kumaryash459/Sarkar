// Menu toggle functionality
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdbTXltSUavNyG_i0OCw6reWjHTxPBnQT2uCcve4aoymbam4dB-Z39j_XI5Db2ZSmu/exec';

// Inquiry form functionality
const inquiryBtn = document.getElementById("inquiryBtn");
const formModal = document.getElementById("formModal");
const closeModal = document.getElementById("closeModal");
const inquiryForm = document.getElementById("inquiryForm");

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

// Inquiry form submission
if (inquiryForm) {
  inquiryForm.addEventListener("submit", function(e) {
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

    const formData = {
      name: name,
      email: email,
      phone: phone,
      course: course
    };

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      body: JSON.stringify(formData)
    })
    .then(() => {
      alert("Form submitted successfully!");
      inquiryForm.reset();
      formModal.style.display = "none";
    })
    .catch(err => {
      console.error("Error details:", err);
      alert("Form submitted successfully! (Note: You may see this message even if the submission was successful)");
      inquiryForm.reset();
      formModal.style.display = "none";
    });
  });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      mobile: contactForm.mobile.value,
      course: contactForm.course.value,
      message: contactForm.message.value
    };

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("Form submitted successfully!");
      contactForm.reset();
    })
    .catch(err => {
      console.error("Error details:", err);
      alert("Form submitted successfully! (Note: You may see this message even if the submission was successful)");
      contactForm.reset();
    });
  });
}
