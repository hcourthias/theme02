<template>
    <div id="container">
        <div class="sign">
            <p>Name</p>
            <input type="text" name="namein" v-model="name">
            <p>eMail</p>
            <input type="text" name="emailin" v-model="email">
            <button v-on:click="getUser">Sign In</button>
        </div>
        <div class="sign">
            <p>Name</p>
            <input type="text" name="nameOut" v-model="name">
            <p>eMail</p>
            <input type="text" name="emailout" v-model="email">
            <button v-on:click="createUser">Sign Out</button>
        </div>
    </div>
</template>

<script>
  import {API} from "./api/api"
    export default {
        data() {
            return{
                name: null,
                email: null,
            }
        },
        methods: {
          createUser() {
            API.createUser(this.email,this.name).then(response => console.log(response)).catch(error=> alert(error  ))
          },
          updateUser(){
            // API.updateUser(id,name)
          },
          getUser(){
            console.log(this.email+" fzefezf "+ this.name)
            API.getUserByEmailAndUsername(this.email,this.name).then(resp => console.log(resp.data.data.id))
            // if (retour!="erreur"){
              
            // }
          },
          deleteUser() {
            API.deleteUser()
          },
        }
    }
    

</script>

<style >
#container{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: center;
}

.sign{
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #ededed ;
}
</style>