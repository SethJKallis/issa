<template>
<div class="card">
  <div class="card-header">
    <div class="text-header">Register</div>
  </div>
  <div class="card-body">
    <form action="#">
      <div class="form-group">
        <label for="firstname">FirstName</label>
        <input required="" class="form-control" v-model="packet.first_name" name="firstname" id="firstname" type="text">
      </div>
      <div class="form-group">
        <label for="lastname">LastName</label>
        <input required="" class="form-control" v-model="packet.last_name" name="lastname" id="lastname" type="text">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input required="" class="form-control" v-model="packet.email" name="email" id="email" type="email">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input required="" class="form-control" v-model="packet.userpass" name="password" id="password" type="password">
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input required="" class="form-control" v-model="packet.userpass" name="confirm-password" id="confirm-password" type="password">
      </div>
    <input type="submit" v-on:click.prevent="register(packet)" class="btn" value="submit"></form>
  </div>
</div>

</template>

<script>
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
// import {ref} from 'vue';
export default {
  setup(){
    let store = useStore();
    // let spinner = ref(false);
    let router = useRouter();
    const packet = {
      first_name: "",
      last_name: "",
      email: "",
      userpass: ""
    };
    async function register(packet){
      // spinner.value = !spinner.value;
      await store.dispatch('register', packet);
      let pack = {
        "email": packet.email,
        "userpass": packet.userpass
      };
      await store.dispatch('login', pack);
      localStorage.setItem('user', JSON.stringify(await store.state.user));
      router.push({
        name: 'home',
        path: '/'
        }).then(()=>location.reload);
    }
    return{
      register,
      packet
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #000;
}

.card {
  width: 350px;
  height: 80vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  color: cyan;
}

.card-header {
  background-color: #333;
  padding: 16px;
  text-align: center;
}

.card-header .text-header {
  margin: 0;
  font-size: 18px;
  color: rgb(255, 255, 255);
}

.card-body {
  padding: 16px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 1px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #000;
  color: cyan;
}

.btn {
  padding: 12px 24px;
  margin-left: 13px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0
}
</style>

