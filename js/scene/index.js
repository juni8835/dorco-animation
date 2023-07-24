import sceneData from './scene.data.js';
import { calcValue, calcRatio } from './scene.helpers.js';

let currentScene = 0;
const sectionList = document.querySelectorAll('[data-scroll-container]');

window.onscroll = () => {
  init();
};

function init() {
  setCurrentScene();
  playAnimation(currentScene);
}
init();

function setCurrentScene() {
  for (const section of sectionList) {
    if (window.scrollY <= section.offsetTop + section.offsetHeight) {
      currentScene = Number(section.dataset.sceneId);
      document.body.setAttribute('data-current-scene', currentScene);
      break;
    }
  }
}

function playAnimation(currentScene) {
  const { wrapper, values, objs } = sceneData[currentScene];
  const ratio = calcRatio(wrapper);
  switch (currentScene) {
    case 0:
      {
        for (const key in values) {
          let opacity, tranY;
          const o_in = calcValue(wrapper, values[key].opac_in);
          const o_out = calcValue(wrapper, values[key].opac_out);
          const ty_in = calcValue(wrapper, values[key].tranY_in);
          const ty_out = calcValue(wrapper, values[key].tranY_out);

          if (ratio >= values[key].opac_out[2].start) {
            opacity = o_out;
            tranY = ty_out;
          } else if (ratio >= values[key].opac_in[2].start) {
            opacity = o_in;
            tranY = ty_in;
          }

          objs[key].style.opacity = opacity;
          objs[key].style.transform = `translate(0, ${tranY}vh)`;
        }
      }
      break;
    case 1:
      {
        let opacity, tranY;

        for (const key in values) {
          let opacity, tranY;
          const o_in = calcValue(wrapper, values[key].opac_in);
          const o_out = calcValue(wrapper, values[key].opac_out);
          const ty_in = calcValue(wrapper, values[key].tranY_in);
          const ty_out = calcValue(wrapper, values[key].tranY_out);

          if (ratio >= values[key].opac_out[2].start) {
            opacity = o_out;
            tranY = ty_out;
          } else if (ratio >= values[key].opac_in[2].start) {
            opacity = o_in;
            tranY = ty_in;
          }

          objs[key].style.opacity = opacity;
          objs[key].style.transform = `translate(0, ${tranY}vh)`;
        }
      }
      break;
  }
}
