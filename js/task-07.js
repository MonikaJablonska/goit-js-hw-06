const text = document.querySelector("#text");
const sizeControl = document.querySelector("#font-size-control");

sizeControl.addEventListener("input", () => {
  text.style.fontSize = sizeControl.value + "px";
});
