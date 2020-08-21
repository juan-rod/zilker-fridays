<template>
  <div id="app">
    <div class="static"></div>
    <router-view/>
    <section class="landscape show-on-scroll">
      <img src="./assets/images/zilker-park-edit.png" alt="zilker park with transparent bg">
      <div>
        <h1 class="glitch show-on-scroll" data-text="SEE YOU THERE">SEE YOU THERE</h1>
        <h1 class="glow show-on-scroll">SEE YOU THERE</h1>
      </div>
    </section>
      <footer>
        <a href="https://www.linkedin.com/in/juanrod1/" target="_blank">
        
        <p>juanrod did this</p>
        </a>
      </footer>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
.static {
  background-image: url('./assets/images/static.gif');
  background-size: cover;
  background-repeat: repeat-y;
  opacity: .1;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
section.landscape {
  opacity: 0;
  position: relative;
  filter: blur(10px);
  z-index: -1;
  transition: all .5s .35s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &.is-visible {
    opacity: 1;
    filter: blur(0px);
  }
  img {
    filter: grayscale(4%) hue-rotate(74deg);
    width: 100%;
  }
  div {
    position: absolute;
    bottom: 50px;
    left: 10px;
    width: 95%;
  }
}
    footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      // border: 1px solid red;
      @include flexRow;
      justify-content: flex-end;
      padding: 0 3em 0;
      z-index: 2;
      p {
        letter-spacing: .8px;
        filter: blur(.8px);
      } 
    }
</style>
