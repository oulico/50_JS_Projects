const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    // setTimeout(() => {
    // }, 100);
    randomSelect();
    // e.target.value = "";
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
  console.log(tags);
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
// -----------------------------------------
// function randomSelect() {
//   const times = 30;
//   const interval = setInterval(() => {
//     const randomTag = pickRandomTag();
//     highlightTag(randomTag);
//     setTimeout(() => {
//       unHightlightTag(randomTag);
//     }, 100);
//   }, 100);

//   setTimeout(() => {
//     clearInterval(interval);
//     setTimeout(() => {
//       const randomTag = pickRandomTag();
//       highlightTag(randomTag);
//     }, 100);
//   }, times * 100);
// }

// function pickRandomTag() {
//   const tags = document.querySelectorAll(".tag");
//   return tags[Math.floor(Math.random() * tags.length)];
// }

// function highlightTag(tag) {
//   tag.classList.add("highlight");
// }

// function unHightlightTag(tag) {
//   tag.classList.remove("highlight");
// }
// ----------------------------------------------------------

// function randomSelect() {
//   const tags = document.querySelectorAll(".tag");
//   const times = 30;
//   const interval = setInterval(() => {
//     const randomTag = pickRandomTag();
//     highlightTag(randomTag);
//     setTimeout(() => {
//       unHighlightTag(randomTag);
//     }, 100);
//   }, 100);

//   setTimeout(() => {
//     clearInterval(interval);
//     const randomTag = pickRandomTag();
//     highlightTag(randomTag);
//   }, times * 100);
// }

// function pickRandomTag() {
//   const tags = document.querySelectorAll(".tag");
//   console.log(Math.floor(Math.random() * tags.length));
//   return tags[Math.floor(Math.random() * tags.length)];
// }

// function highlightTag(tag) {
//   tag.classList.add("highlight");
// }

// function unHighlightTag(tag) {
//   tag.classList.remove("highlight");
// }
