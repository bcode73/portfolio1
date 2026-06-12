/* ============================================================
   Samsec Studio — Portfolio scripts
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Typing / deleting hero effect ---------- */
  const phrases = [
    "Fullstack Website Developer.",
    "Python Developer."
  ];
  const typedEl = document.getElementById("typed");
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1800); // pause on full phrase
        return;
      }
      setTimeout(tick, 90);
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 45);
    }
  }
  setTimeout(tick, 600);

  /* ---------- Sticky header ---------- */
  const header = document.getElementById("header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 60);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", function () {
    header.classList.toggle("menu-open");
  });
  document.querySelectorAll("#navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("menu-open");
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  function highlightNav() {
    let currentId = "home";
    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 200) currentId = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
  }
  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  /* ---------- Portfolio filter ---------- */
  const filterButtons = document.querySelectorAll("#portfolioFilters li");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      portfolioItems.forEach(function (item) {
        const show = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------- Reveal on scroll + skill bars ---------- */
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".skill-fill").forEach(function (bar) {
        bar.style.width = bar.dataset.width + "%";
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

  /* ---------- Contact form (opens mail client) ---------- */
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cfName").value.trim();
    const email = document.getElementById("cfEmail").value.trim();
    const message = document.getElementById("cfMessage").value.trim();
    const subject = encodeURIComponent("Website enquiry from " + name);
    const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:studio@samsec.com.ng?subject=" + subject + "&body=" + body;
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
