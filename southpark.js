"use strict";

window.addEventListener("load", initApp);

function initApp() {
    console.log("app is running")
}

const tomCruise = {
    name: "Tom Cruise",
    image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.us.en:ea6e1f8f-6864-44ad-9eb3-6740e7bbd49f?quality=0.7&gen=ntrn&legacyStatusCode=true",
    occupation: "Hollywood actor, religious advocate",
    age: "60",
    voicedBy: "Trey Parker",
    gender: "Male",
    religion: "Scientology",
    nickName: "Mav",
    hairColor: "Brown",
    grade: "null",
    episodes: "3",
    firstApperance: "Trapped in the Closet",
}

const comTruise = {
    name: "Seth Haley",
    image: "https://musictech.com/wp-content/uploads/2022/05/Com-Truise-in-studio.jpg",
    occupation: "Chillwave connoisseur",
    age: "37-38",
    voicedBy: null,
    gender: "Male",
    religion: null,
    nickName: "Com Truise",
    hairColor: "Light-ish",
    grade: null,
    episodes: null,
    firstApperance: null,
}

function addCharacter(character) {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="" image">
      <p><strong>Occupation:</strong> ${character.occupation}</p>
      <p><strong>Age:</strong> ${character.age}</p>
      <p><strong>Voiced By:</strong> ${character.voicedBy}</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Religion:</strong> ${character.religion}</p>
      <p><strong>Nick Name:</strong> ${character.nickName}</p>
      <p><strong>Hair Color:</strong> ${character.hairColor}</p>
      <p><strong>Grade:</strong> ${character.grade}</p>
      <p><strong>Episodes:</strong> ${character.episodes}</p>
      <p><strong>First Appearance:</strong> ${character.firstApperance}</p>
    `;
    document.querySelector("#character").appendChild(li);
  }

  addCharacter(tomCruise);
  addCharacter(comTruise);


// function showCharacter (character) {
//     document.querySelector("#name").textContent = character.name;
//     document.querySelector("#image").textContent = character.image;
//     document.querySelector("#occupation").textContent = character.occupation;
//     document.querySelector("#age").textContent = character.age;
//     document.querySelector("#voicedBy").textContent = character.voicedBy;
//     document.querySelector("#gender").textContent = character.gender;
//     document.querySelector("#religion").textContent = character.religion;
//     document.querySelector("#nickName").textContent = character.nickName;
//     document.querySelector("#hairColor").textContent = character.hairColor;
//     document.querySelector("#grade").textContent = character.grade;
//     document.querySelector("#episodes").textContent = character.episodes;
//     document.querySelector("#firstApperance").textContent = character.firstApperance;

//     return character;
// }