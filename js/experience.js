document.addEventListener("DOMContentLoaded", () => {
  const experienceCards = document.querySelectorAll(".experience-card");

  experienceCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});
