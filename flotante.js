const img = document.getElementById("img");
const description = document.getElementById("description");
description.style.display = "none";
img.addEventListener("mouseover", function() {
  img.addEventListener("mousemove", function(event) {
    description.style.left = event.pageX + 10 + "px";
    description.style.top = event.pageY + 10 + "px";
    description.style.display = "block";
  });
});
img.addEventListener("mouseout", function() {
  description.style.display = "none";
  img.removeEventListener("mousemove", function() {});
});
