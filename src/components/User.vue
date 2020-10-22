<template>
    <div id="container">
        <div class="sign">
            <p>Name</p>
            <input type="text" name="name">
            <p>eMail</p>
            <input type="text" name="email">
            <button>Sign In</button>
        </div>
        <div class="sign">
            <p>Name</p>
            <input type="text" name="name">
            <p>eMail</p>
            <input type="text" name="email">
            <button>Sign Out</button>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return{
                name: String,
                email: String,
            }
        },
        createUser() {
            this.name=this.input.name
            this.email=this.input.email
        },
        updateUser(){

        },
        getUser(){

        },
        deleteUser() {

        },
    }
    

</script>

<style >
#container{
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
}

.sign{
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #ededed ;
}
</style>