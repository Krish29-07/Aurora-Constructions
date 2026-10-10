
const exploreButton = document.getElementById("btn");

exploreButton?.addEventListener("click", () => {
  document.getElementById("projects")?.scrollIntoView({
    behavior: "smooth"
  });
});
