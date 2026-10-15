// Feedback simples de interação; os destinos são definidos no index.html.
document.querySelectorAll(".action").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("is-clicked");
    window.setTimeout(() => link.classList.remove("is-clicked"), 250);
  });
});
