<template>
  <div id="app">
    <div class="container">
      <h1>Où ?</h1>
      <select v-model="selected" class="select">
        <option
          v-for="option in options"
          v-bind:value="option.value"
          v-bind:key="option.key"
        >
          {{ option.value }}
        </option>
      </select>
      <div>
        <router-link class="button" :to="{name: 'currentWeather', params: { city: selected }}">Search</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>

export default {
  name: "App",
  data() {
    return {
      selected: "Toulouse",
      options: [{ value: "Toulouse" }, { value: "Paris" }, { value: "Nice" }],
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  background-color: #ededed;
  max-width: 70%;
  padding: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
}
.select {
  background-color: #ffffff;
  width: 70%;
  padding: 8px;
  margin-bottom: 12px;
  border-color: #aaaaaa;
  border-radius: 8px;
}
.button {
  background-color: #1e90ff;
  border: none;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
</style>
