const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function disabledLink(event) {
  event.preventDefault();
  alert("This is a placeholder link. Replace href=\"#\" with the actual URL.");
  return false;
}
