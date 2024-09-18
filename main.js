document.addEventListener('DOMContentLoaded', function() {
  let typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Java Developer', 'Ethical Hacker'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const serviceBoxes = document.querySelectorAll('.service-box');

  function handleScroll() {
    const triggerPoint = window.innerHeight / 1.2;

    serviceBoxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerPoint) {
        box.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on initial load
});

