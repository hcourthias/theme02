<template>
  <div>
    <div class="container">
      <h1>Metéo actuelle à {{ city }} </h1>
      <body>Temperature: {{temperature}}°C </body>
      <body>Date: {{date}} </body>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

  export default {
    data() {
      return {
        city: null,
        temperature: null,
        date: moment().locale("fr").format("Do MMMM YYYY, HH:mm"),       
      }
    },
    created() {
      this.refreshCurrentWeather(this.$route.params.city)
    },
    beforeRouteUpdate (to, from, next) {
      this.refreshCurrentWeather(to.params.city);
      next();
    },
    methods: {
      refreshCurrentWeather: function (city) {
          this.temperature = Math.floor(Math.random() * 32) + 1  
          this.city = city
          this.date = moment().locale("fr").format("Do MMMM YYYY, HH:mm")
      },
    }
  }
</script>

<style scoped>

  .container {
    background-color: #EDEDED;
    max-width: 70%;
    padding: 48px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
  }
</style>