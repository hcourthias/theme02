<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form">
            <base-input
              class="input-group-alternative"
              placeholder="Username"
              type="text"
              addon-left-icon="ni ni-hat-3"
              v-model="username"
            >
            </base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="email"
            >
            </base-input>
            <div class="text-center">
              <base-button type="primary" class="my-4" v-on:click="login">Sign in</base-button>
            </div>
            <div class="text-center">
              <router-link to="/register" class="text-light"
                ><small>Create new account</small></router-link
              >
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3"></div>
    </div>
  </div>
</template>
<script>
// import {getUserByEmailAndUsername} from "../api/api"
export default {  
  name: "login",
  data() {
    return {
        email: "",
        username: "",
    };
  },
  methods: {
      async login() {
          // try {
          //   const result = await getUserByEmailAndUsername(this.email, this.username)
          //   console.log(result)
          // } catch (err) {
          //   console.log(err)
          // }
          this.$router.push('dashboard')

      }
  }
};
</script>
<style>
</style>
