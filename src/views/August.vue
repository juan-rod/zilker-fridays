<template>
  <div class="main-container maxWidth_1024 border2">
    <section class="border2 date-time-calendar border flexcol">
        <calendar />
    </section>
    <section v-for="(name, index) in headerNames" :class="name" :key="index">
      <h1 class="glitch show-on-scroll" :data-text="name">{{name}}</h1>
      <h1 class="glow show-on-scroll">{{name}}</h1>
      <div class="map-img" v-if="index === 1">
        <img class="show-on-scroll scoll-" src="../assets/images/map-grass.png" alt="map of zilker">
      </div>
      <div class="map-img" v-if="index === 2">
        <img class="show-on-scroll" src="../assets/images/map-rocks.png" alt="map of zilker">
      </div>
    </section>
    
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
export default {
  name: 'August',
  components: { Calendar },
  data () {
    return {
      observer: null,
      animejs: this.$animeJS(),
      headerNames: ['zilker fridays', 'meet on the grass','park on the rocks', 'BYODrinks', 'BYOSnacks', 'BYOGames', 'BYOBlankets' ]
    }
  },
  created () {
    this.observer = new IntersectionObserver(
      this.onElementObserved, 
      {
        root: this.$el,
        threshold: .5
      })
  },
  mounted () {
    const targets = document.querySelectorAll(".show-on-scroll");
    let observer = this.observer
    targets.forEach(function(target) {
      observer.observe(target);
    })
    // console.log('this.$animeJS', this.$animeJS())
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    onElementObserved (entries) {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add("is-visible")
          : entry.target.classList.remove("is-visible");
      })
    },
    showMap (index) {
      return (index === 1) || (index === 2)
    }
  }
}
</script>

<style lang="scss" scoped>
  .map-img {
    width: 100%;
    max-width: 450px;
    align-self: center;
    margin-top: 4em;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  section.BYOBlankets {
    height: 30vh;
  }
</style>
