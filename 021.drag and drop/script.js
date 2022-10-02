const fills = document.querySelectorAll(".fill");
const empties = document.querySelectorAll(".empty");

fills.forEach((fill, idx) => {
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);
  fill.setAttribute("data-idx", idx);
  fill.setAttribute("id", `id${idx}`);
});

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

let idx;
function dragStart() {
  idx = this.getAttribute("data-idx");
  console.log(idx);
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}

function dragEnter(e) {
  e.preventDefault();
  console.log("drag Enter");
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
  console.log("drag leave");
}

function dragDrop() {
  this.className = "empty";
  console.log(this.hasChildNodes());
  // if (this.childNodes[2]) {
  this.append(fills[idx]);
  // }
}
