<template>
  <div class="gif-container">
    <div class="gif-item" v-for="gif in theGifs" :key="gif.id">
      <img :src="getGifUrl(gif)" alt="">
    </div>
  </div>
</template>

<script>
import GiphyService from '@/services/giphy/Service'
export default {
  props: {
    itemIndex: Number
  },
  data () {
    return {
      giphySearchTerms: [
        'vintage drinks',
        'vintage snacks',
        'sitting grass blanket',
        'outdoor sports games'
      ],
      theGifs: []
    }
  },
  mounted () {
    this.getGifs()
  },
  methods: {
    getGifUrl (gif) {
      console.log('gif', gif)
      return gif.url
    },
    async getGifs () {
      console.log('this.itemIndex', this.itemIndex)
      console.log('this.giphySearchTerms[index]', this.giphySearchTerms[this.itemIndex])
      this.theGifs = await GiphyService.getGiphySearch(this.giphySearchTerms[this.itemIndex])
    }
  }
}
</script>

<style>

</style>