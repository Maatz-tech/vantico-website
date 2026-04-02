function initAnimations() {
  const elements = document.querySelectorAll<HTMLElement>('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          // For stagger parents, set --stagger-delay on each child
          if (el.dataset.animate === 'stagger') {
            Array.from(el.children).forEach((child, i) => {
              (child as HTMLElement).style.setProperty(
                '--stagger-delay',
                `${i * 80}ms`
              );
            });
          }

          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

initAnimations();
document.addEventListener('astro:after-swap', initAnimations);
