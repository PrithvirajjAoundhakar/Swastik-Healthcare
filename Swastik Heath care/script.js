

  const showcaseText = document.querySelector('.showcase-content h1');
  const text = showcaseText.textContent;
  let i = 0;
  showcaseText.textContent = '';
  
  function typeWriterEffect() {
    if (i < text.length) {
      showcaseText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriterEffect, 100);
    }
  }
  window.onload = typeWriterEffect;
  
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = '0.3s';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });

  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s';
    observer.observe(section);
  });
  
  const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
