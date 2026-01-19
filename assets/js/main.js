document.addEventListener("scroll", () => {
    document.querySelectorAll(".service-card").forEach(card => {
      const position = card.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });
  