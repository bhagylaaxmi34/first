const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = '#2874f0';
    link.style.textDecoration = 'underline';
  });
  link.addEventListener("mouseout", () => {
    link.style.color = '#2c2c2c';
    link.style.textDecoration = 'none';
  });
});