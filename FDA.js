function toggleHeart(element) {
    const liked = element.dataset.liked === "true";
    element.dataset.liked = !liked;
    element.innerText = liked ? '♡' : '❤️';
    element.classList.toggle('active', !liked);
}

document.addEventListener("DOMContentLoaded", function () {
    const footerHeaders = document.querySelectorAll(".footer-col h4");
  
    footerHeaders.forEach(header => {
      const toggleIcon = document.createElement("span");
      toggleIcon.textContent = " ⌄";
      toggleIcon.style.cursor = "pointer";
      toggleIcon.style.fontWeight = "normal";
      toggleIcon.style.fontSize = "14px";
      header.appendChild(toggleIcon);
  
      const list = header.nextElementSibling;
      if (list && list.tagName === "UL") {
        list.style.display = window.innerWidth < 768 ? "none" : "block";
      }
  
      header.addEventListener("click", () => {
        if (list.style.display === "none") {
          list.style.display = "block";
        } else {
          list.style.display = "none";
        }
      });
    });
  
    function adjustTestimonials() {
      const testimonials = document.querySelector(".testimonials");
      if (window.innerWidth < 768) {
        testimonials.style.flexDirection = "column";
        testimonials.style.alignItems = "center";
      } else {
        testimonials.style.flexDirection = "row";
        testimonials.style.alignItems = "flex-start";
      }
    }
  
    adjustTestimonials();
    window.addEventListener("resize", adjustTestimonials);
  });

  const cards = document.querySelectorAll('.testimonial');

cards.forEach(card => {
  card.addEventListener('animationend', () => {
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = null;
  });
});
