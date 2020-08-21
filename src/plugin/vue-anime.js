import anime from 'animejs';

const VueAnime = {
  install (Vue) {
    Vue.prototype.$animeJS = anime;
  }
}

export default VueAnime