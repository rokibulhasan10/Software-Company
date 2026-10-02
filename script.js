document.addEventListener('DOMContentLoaded', function () {
  const clock = document.getElementById('dateTime');
  function showDateTime() {
    if (clock) clock.textContent = new Date().toLocaleString();
  }
  showDateTime();
  setInterval(showDateTime, 1000);

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you! Your message has been submitted successfully.');
      form.reset();
    });
  }
});
