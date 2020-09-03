<template>
  <div class="calendar flexcol">
    <div class="weekday flexrow">
      <div class="day day-border"> Sunday </div>
      <div class="day day-border"> Monday </div>
      <div class="day day-border"> Tuesday </div>
      <div class="day day-border"> Wednesday </div>
      <div class="day day-border"> Thursday </div>
      <div class="day day-border"> Friday </div>
      <div class="day day-border"> Saturday </div>
    </div>
    <div class="date-container">
      <span v-for="day in daysInMonth" :key="day" :style="setFirstDay(day)">
        <span v-if="day !== eventDay">{{day}}</span>
        <span v-else>
          <span class="glitch day-glitch" :data-text="day">{{day}}</span>
          <span class="glow day-glow">{{day}}</span>
          <!-- {{day}} -->
        </span>
      </span>
      <!-- <img src="./pen.gif" alt="pen-circle-gif"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  computed: {
    getMonthYear() {
      let date = new Date(); 
      return {
        month: date.getMonth() + 1,
        year: date.getFullYear()
      }
    },
    month () {
      return this.getMonthYear.month
    },
    year () {
      return this.getMonthYear.year
    },
    eventDay () {
      function getNextDayOfWeek(dayOfWeek) {
        let dateTime = new Date()
        let date = new Date(dateTime.getTime())
        date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7)
        return date.getDate()
      }
      const friday = 5
      return getNextDayOfWeek(friday)
    },
    daysInMonth() {
      return new Date(this.year, this.month, 0).getDate();
    },
    firstDayInMonth () {
      let firstDay = new Date(`${this.month}/01/${this.year}`).getDay()
      return (firstDay === 0) ? 7 : firstDay
    }
  },
  mounted () {
    // this.createCalendar()
    // this.observer.observe(this.$el);
  },
  methods: {
    setFirstDay (day) {
      if (day === 1) {
        let start = this.firstDayInMonth + 1
        let end = this.firstDayInMonth + 2
        return `grid-column: ${start}/${end}`
      }
      if (day === this.eventDay) {
        return 'font-size: 1.5em'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .day-glitch {
    font-size: 1.15em;
    color: lightgreen;
  }
  .day-glow {
    // color: lightgreen;
    font-size: 1.15em;
  }
  span span {
    padding: 0;
  }
</style>