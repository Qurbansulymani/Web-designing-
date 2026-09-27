/* ============================================================
   HAMBURGER MENU TOGGLE
   ============================================================ */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const socialMenu = document.getElementById("socialMenu");

if (menuToggle && navMenu && socialMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    socialMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  /* Close menu when a nav link is clicked */
  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      socialMenu.classList.remove("active");
      menuToggle.classList.remove("open");
    });
  });
} else {
  console.warn("Menu toggle elements not found. Check your HTML ids.");
}

/* ============================================================
   SOCIAL MEDIA LINKS (footer icons)
   ============================================================ */
const socialLinks = {
  fbIcon: "https://facebook.com/YOUR_USERNAME",
  tgIcon: "https://t.me/YOUR_USERNAME",
  waIcon: "https://wa.me/93XXXXXXXXX",
  liIcon: "https://linkedin.com/in/YOUR_USERNAME",
  ghIcon: "https://github.com/YOUR_USERNAME",
};

Object.keys(socialLinks).forEach(function (id) {
  const img = document.getElementById(id);
  if (!img) return;

  const link = document.createElement("a");
  link.href = socialLinks[id];
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  img.parentNode.insertBefore(link, img);
  link.appendChild(img);
});

/* ============================================================
   HEADER SOCIAL TEXT LINKS
   ============================================================ */
const headerLinks = {
  "social-fb": "https://facebook.com/YOUR_USERNAME",
  "social-wa": "https://wa.me/93XXXXXXXXX",
  "social-tg": "https://t.me/YOUR_USERNAME",
  "social-li": "https://linkedin.com/in/YOUR_USERNAME",
};

Object.keys(headerLinks).forEach(function (cls) {
  const el = document.querySelector("." + cls);
  if (!el) return;
  el.href = headerLinks[cls];
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});
