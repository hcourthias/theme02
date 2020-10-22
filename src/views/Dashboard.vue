<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8 text-center">
          <base-button type="primary" class="my-4" v-on:click="testAPI">TEST API</base-button>
        </base-header>
    </div>
</template>
<script>
  import {getUser} from "../api/api"

  export default {
    components: {

    },
    data() {
      return {
       
      };
    },
    methods: {
      testAPI() {
        console.log("testAPI")
        getUser(1100).then((res) => console.log(res)).catch(() => console.log("error API"))
      }
    },
    mounted() {
    }
  };
</script>
<style></style>
