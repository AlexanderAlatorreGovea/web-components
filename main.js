document.addEventListener("DOMContentLoaded", () => {
  const bb = document.querySelector("big-bang");
  bb.addEventListener("click", changeColor);
});

function changeColor(evt) {
  const bb = evt.target;

  // the character is the new character we created
  bb.character = bb.character == "Leonard" ? "Sheldon" : "Leonard";
  bb.color = bb.color == "Leonard" ? "red" : "blue";
}
