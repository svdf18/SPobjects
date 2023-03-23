"use strict";

window.addEventListener("load", initApp);

function initApp() {
    console.log("app is running");

    const tomCruise = {
      name: "Tom Cruise",
      nickName: "Mav",
      image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.us.en:ea6e1f8f-6864-44ad-9eb3-6740e7bbd49f?quality=0.7&gen=ntrn&legacyStatusCode=true",
      occupation: "Hollywood actor, religious advocate",
      age: 47,
      voicedBy: "Trey Parker",
      gender: "Male",
      religion: "Scientology",
      catchPhrase: "I'm never coming out!",
      hairColor: "Brown",
      schoolGrade: null,
      episodes: "s09e12, s14e05",
      apperances: "2",
      firstApperance: "Trapped in the Closet, s09e12",
    }

    const tooCruise = {
      name: "Too Cruise",
      nickName: "Mav",
      image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.us.en:ea6e1f8f-6864-44ad-9eb3-6740e7bbd49f?quality=0.7&gen=ntrn&legacyStatusCode=true",
      occupation: "Hollywood actor, religious advocate",
      age: 47,
      voicedBy: "Trey Parker",
      gender: "Male",
      religion: "Scientology",
      catchPhrase: "I'm never coming out!",
      hairColor: "Brown",
      schoolGrade: null,
      episodes: "s09e12, s14e05",
      apperances: "2",
      firstApperance: "Trapped in the Closet, s09e12",
    }

  showCharacter(tomCruise);
  showCharacter(tooCruise);
  
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
        <p><strong>Apperances:</strong> ${character.apperances}</p>
        <p><strong>First Appearance:</strong> ${character.firstApperance}</p>
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
