const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// sounds.forEach((sound) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   btn.innerText = sound;
//   btn.addEventListener("click", () => {
//     stopSongs();
//     document.getElementById(sound).play();
//   });
//   document.getElementById("buttons").appendChild(btn);
// });

// function stopSongs() {
//   sounds.forEach((sound) => {
//     const song = document.getElementById(sound);
//     song.pause();
//     song.currentTime = 0;
//   });
// }

// sounds.forEach((sound) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   btn.innerText = sound;
//   btn.addEventListener("click", () => {
//     stopSongs();
//     document.getElementById(sound).play();
//   });
//   document.getElementById("buttons").appendChild(btn);
// });

// function stopSongs() {
//   sounds.forEach((sound) => {
//     const song = document.getElementById(sound);
//     song.pause();
//     song.currentTime = 0;
//   });
// }

// sounds.forEach((sound) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   btn.innerText = sound;
//   btn.addEventListener("click", () => {
//     stopSongs(sound);
//     document.getElementById(sound).play();
//   });
//   document.getElementById("buttons").appendChild(btn);
// });

// function stopSongs(sound) {
//   const song = document.getElementById(sound);
//   song.pause();
//   song.currentTime = 0;
// }

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    songStop();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function songStop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
