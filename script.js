"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("app is running");

  const tomCruise = await getCharacter("https://raw.githubusercontent.com/svdf18/SPobjects/main/data/tomcruise.json");
  const tooCruise = await getCharacter("https://raw.githubusercontent.com/svdf18/SPobjects/main/data/tomcruise.json");
  showCharacter(tomCruise);
  showCharacter(tooCruise);
  
}

async function getCharacter(url) {
  const response = await fetch(url);
  console.log(response);

  const data = await response.json();
  console.log(data);
  return data;
}

function showCharacter(character) {
  console.log(character);
  document.querySelector("#characters").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
          <article class="grid-item">
              <img src="${character.image}">
              <h2>${character.name}</h2>
              <p><i>${character.occupation}</i></p>
              <br/>
              <p><strong>Age:</strong> ${character.age}</p>
              <p><strong>Voiced by:</strong> ${character.voicedBy}</p>
              <p><strong>Catchfrase:</strong> "${character.catchPhrase}"</p>
          </article>
      `
  );

document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

function characterClicked(){
      document.querySelector("dialog").showModal();
      let existingLi = document.querySelector("#character li");
        if (existingLi) {
        existingLi.remove();
        }

      const li = document.createElement('li');
      li.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Nick Name:</strong> ${character.nickName}</p>
        <img src="${character.image}" alt="">
        <p><strong>Occupation:</strong> ${character.occupation}</p>
        <p><strong>Age:</strong> ${character.age}</p>
        <p><strong>Voiced By:</strong> ${character.voicedBy}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Religion:</strong> ${character.religion}</p>
        <p><strong>Catchfrase:</strong> ${character.catchPhrase}</p>
        <p><strong>Hair Color:</strong> ${character.hairColor}</p>
        <p><strong>School Grade:</strong> ${character.schoolGrade}</p>
        <p><strong>Episodes:</strong> ${character.episodes}</p>
        <p><strong>Apperances:</strong> ${character.appearances}</p>
        <p><strong>First Appearance:</strong> ${character.firstAppearance}</p>
      `;
      document.querySelector("#character").appendChild(li);
    }

    closeDialog();
      
}

function closeDialog(){
const dialog = document.querySelector("dialog");
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
}
