export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    /* opição 1: de scroll suave
    const topo = section.offsetTop;
    window.scrollTo({
          top: topo,
          behavior: "smooth",
    }); */

    // opição 2: de scroll suave
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}
