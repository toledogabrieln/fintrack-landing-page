const btn = document.getElementById("ctaBtn");
const ctaSection = document.getElementById("cta");

btn.addEventListener("click", () => {
  ctaSection.scrollIntoView({ behavior: "smooth" });
});
