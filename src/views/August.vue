<template>
  <div class="main-container maxWidth_1024 border2">
    <section class="border2 date-time-calendar border flexcol">
        <calendar />
    </section>
    <section v-for="(name, index) in headerNames" :class="name" :key="index">
      <h1 class="glitch show-on-scroll" :data-text="name">{{name}}</h1>
      <h1 class="glow show-on-scroll">{{name}}</h1>
      <div class="map-img show-on-scroll" v-if="index === 1">
        <img class="show-on-scroll scoll-" src="../assets/images/map-grass.png" alt="map of zilker">
      </div>
      <div class="map-img show-on-scroll" v-if="index === 2">
        <img class="show-on-scroll" src="../assets/images/map-rocks.png" alt="map of zilker">
      </div>
      <!-- <div class="gif-img show-on-scroll" v-if="index === 3">
        <gif-container :itemIndex="index"/>
      </div> -->
    </section>
    
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
// import GifContainer from '@/components/GifContainer'
// import GiphyService from '@/services/giphy/Service'
export default {
  name: 'August',
  // components: { Calendar, GifContainer },
  components: { Calendar },
  data () {
    return {
      observer: null,
      animejs: this.$animeJS(),
      headerNames: [
        'zilker fridays',
        'meet on the grass',
        'park on the rocks',
        'BYODrinks',
        'BYOSnacks',
        'BYOGames',
        'BYOBlankets'
      ],
      giphySearchTerms: [
        'vintage drinks',
        'vintage snacks',
        'sitting grass blanket',
        'outdoor sports games'
      ],
      drinks: [],
      snacks: [],
      blankets: [],
      games: [],
    }
  },
  created () {
    this.observer = new IntersectionObserver( this.onElementObserved, { root: this.$el, threshold: .5})
    // this.getGifs()
  },

  mounted () {
    const targets = document.querySelectorAll(".show-on-scroll");
    let observer = this.observer
    targets.forEach(function(target) {
      observer.observe(target);
    })
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    // async getGifs () {
    //   this.drinks = await GiphyService.getGiphySearch(this.giphySearchTerms[0])
    //   this.snacks = await GiphyService.getGiphySearch(this.giphySearchTerms[1])
    //   this.blanket = await GiphyService.getGiphySearch(this.giphySearchTerms[2])
    //   this.games = await GiphyService.getGiphySearch(this.giphySearchTerms[3])
    // },
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
