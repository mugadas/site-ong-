const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".site-nav");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainMenu.classList.toggle("is-open", !isExpanded);
  });

  mainMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      mainMenu.classList.remove("is-open");
    }
  });
}

const siteHeader = document.querySelector(".site-header");
const scrollProgress = document.querySelector(".scroll-progress span");
let scrollFramePending = false;

function updateScrollMotion() {
  if (scrollFramePending) return;

  scrollFramePending = true;
  window.requestAnimationFrame(() => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    if (scrollProgress) scrollProgress.style.transform = `scaleX(${progress})`;
    if (siteHeader) siteHeader.classList.toggle("is-scrolled", window.scrollY > 36);
    scrollFramePending = false;
  });
}

window.addEventListener("scroll", updateScrollMotion, { passive: true });
window.addEventListener("resize", updateScrollMotion);
updateScrollMotion();

const revealSelectors =
  ".hero-copy, .hero-figure, .section-heading, .about-grid > div, .about-copy, .history-section > p, .info-row > div, .info-row > p, .principle, .feature-item, .team-figure, .team-copy > p, .project-row, .campaign-grid > div, .gallery-grid figure, .volunteer-inner, .page-intro > p:not(.eyebrow), .form-section .field";
const revealElements = document.querySelectorAll(revealSelectors);

document.documentElement.classList.add("motion-enabled");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -24px 0px" },
  );

  revealElements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
    revealObserver.observe(element);
  });
}

const onlyDigits = (value) => value.replace(/\D/g, "");

function maskCpf(value) {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

function maskPhone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  const prefixLength = digits.length > 10 ? 5 : 4;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 2 + prefixLength)}-${digits.slice(2 + prefixLength)}`;
}

function maskPostalCode(value) {
  const digits = onlyDigits(value).slice(0, 8);
  return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
}

function isValidCpf(value) {
  const digits = onlyDigits(value);
  if (digits.length !== 11 || /^([0-9])\1{10}$/.test(digits)) return false;

  const calculateDigit = (length) => {
    let total = 0;
    for (let index = 0; index < length; index += 1) {
      total += Number(digits[index]) * (length + 1 - index);
    }
    const remainder = (total * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  return calculateDigit(9) === Number(digits[9]) && calculateDigit(10) === Number(digits[10]);
}

const cpfInput = document.querySelector("#cpf");
if (cpfInput) {
  cpfInput.addEventListener("input", () => {
    cpfInput.value = maskCpf(cpfInput.value);
    const digits = onlyDigits(cpfInput.value);
    cpfInput.setCustomValidity(
      digits.length === 11 && !isValidCpf(cpfInput.value) ? "Confira o CPF informado." : "",
    );
  });
}

const phoneInput = document.querySelector("#telefone");
if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    phoneInput.value = maskPhone(phoneInput.value);
  });
}

const postalCodeInput = document.querySelector("#cep");
if (postalCodeInput) {
  postalCodeInput.addEventListener("input", () => {
    postalCodeInput.value = maskPostalCode(postalCodeInput.value);
  });
}

const volunteerForm = document.querySelector("#volunteer-form");
if (volunteerForm) {
  volunteerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    status.textContent = "Dados preenchidos. Obrigada pelo interesse em fazer parte da ELLA+!";
  });
}
