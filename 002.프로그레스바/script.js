// let currentActive = 1;

// next.addEventListener("click", () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }
//   update();
// });

// prev.addEventListener("click", () => {
//   currentActive--;

//   console.log("clicked");

//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });

// function update() {
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });
//   const actives = document.querySelectorAll(".active");
//   progress.style.width =
//     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }

// const progress = document.getElementById("progress");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const circles = document.querySelectorAll(".circle");

// let currentActive = 1;

// next.addEventListener("click", () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }
//   update();
// });

// prev.addEventListener("click", () => {
//   currentActive--;

//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
// });

// function update() {
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }

//     progress.style.width =
//       ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
//   });
//   if (currentActive === 1) {
//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {
//     prev.disabled = false;
//     next.disabled = false;
//   }
// }

// const progress = document.getElementById("progress");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const circles = document.querySelectorAll(".circle");

// let currentActive = 1;

// next.addEventListener("click", () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }
//   console.log(currentActive);
//   update();
// });
// prev.addEventListener("click", () => {
//   currentActive--;

//   if (currentActive === 0) {
//     currentActive = 1;
//   }
//   console.log(currentActive);

//   update();
// });

// function update() {
//   circles.forEach((circle, idx) => {
//     if (currentActive > idx) {
//       circle.classList.add("active");
//     } else if (currentActive <= idx) {
//       circle.classList.remove("active");
//     }
//   });
//   progress.style.width =
//     ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
// }

const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (currentActive > idx) {
      circle.classList.add("active");
    } else if (currentActive <= idx) {
      circle.classList.remove("active");
    }

    progress.style.width =
      ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
  });
}
