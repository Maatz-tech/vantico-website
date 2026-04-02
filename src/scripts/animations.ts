// Preparar títulos com efeito typing: quebra em palavras com spans
document.querySelectorAll('[data-animate-type="typing"]').forEach((el) => {
  const text = el.textContent || '';
  el.innerHTML = text.split(' ').map((word, i) =>
    `<span class="word" style="--word-delay: ${i * 80}ms">${word}</span>`
  ).join(' ');
});

// Intersection Observer para animações on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
      } else {
        entry.target.classList.remove("animate-visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "100px 0px -50px 0px",
  }
);

// Observar todos os elementos com data-animate
document.querySelectorAll("[data-animate]").forEach((el) => {
  observer.observe(el);
});
