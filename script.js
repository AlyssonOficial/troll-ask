document.addEventListener("DOMContentLoaded", () => {
  function firstAction() {
    document.querySelector(".response-container").classList.add("active");
  }
  function hoverAction(e) {
    e.target.style.right = `${Math.floor(Math.random() * 80)}vw`;
    e.target.style.top = `calc(${Math.floor(Math.random() * 80) + 10}%)`;
  }
  document
    .querySelector("#first-option")
    .addEventListener("click", firstAction);
  document
    .querySelector("#second-option")
    .addEventListener("mouseenter", hoverAction);
  document
    .querySelector("#second-option")
    .addEventListener("click", hoverAction);
  document.querySelector("#second-option").style.display = "initial";
});
