document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");
  timeElement.textContent = Date.now();
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("success");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      const errors = {
        name: document.getElementById("error-name"),
        email: document.getElementById("error-email"),
        subject: document.getElementById("error-subject"),
        message: document.getElementById("error-message"),
      };

      Object.values(errors).forEach((el) => (el.textContent = ""));

      if (!name.value.trim()) {
        errors.name.textContent = "Full name is required.";
        isValid = false;
      }

      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        errors.email.textContent = "Valid email is required.";
        isValid = false;
      }

      if (!subject.value.trim()) {
        errors.subject.textContent = "Subject is required.";
        isValid = false;
      }

      if (!message.value.trim() || message.value.length < 10) {
        errors.message.textContent = "Message must be at least 10 characters.";
        isValid = false;
      }

      if (isValid) {
        successMsg.hidden = false;
        form.reset();
      }
    });
  }
});

