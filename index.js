// Scrolling Restriction
const entireBody = document.getElementById("entireBody");
document.querySelector("#openSidebarMenu").addEventListener("click", () => {
  if (entireBody.style.overflowY == "scroll") {
    entireBody.style.overflowY = "hidden";
  } else if (entireBody.style.overflowY == "hidden") {
    entireBody.style.overflowY = "scroll";
  }
});
