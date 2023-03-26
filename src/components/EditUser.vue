<template>
    <div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editModal' + this.user.userID">
  Edit 
</button>

<div class="modal fade" :id="'editModal' + this.user.userID" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editModalLabel">Edit {{ this.user.firstName }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form>
      <div class="modal-body">
          <input class="form-control" type="text" name="editFirstName" :id="'editFirstName' + this.user.userID" :placeholder="this.user.firstName" v-model="editUserData.firstName" required>
          <input class="form-control" type="text" name="editLastName" :id="'editLastName' + this.user.userID" :placeholder="this.user.lastName" v-model="editUserData.lastName" required>
          <input class="form-control" type="text" name="editRole" :id="'editUserRole' + this.user.userID" :placeholder="this.user.userRole" v-model="editUserData.userRole" required>
          <input class="form-control" type="text" name="editEmail" :id="'editEmail' + this.user.userID" :placeholder="this.user.email" v-model="editUserData.email" required>
          <input class="form-control" type="password" name="editUserPass" :id="'editUserPass' + this.user.userID" placeholder="Password" v-model="editUserData.userPass" required>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click.prevent="editUser(this.user)">Save changes</button>
      </div>
    </form>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue'; 
export default {
  inheritAttrs: false,
  props:['user'],
setup(){
  let store = useStore();
  let users = computed(() => store.state.users);

  let editUserData = {
    userID:'',
    firstName:'',
    lastName:'',
    userRole:'user',
    email:'',
    userPass:''
  }
function editUser(user){
  editUserData.userID = user.userID;
  console.log(editUserData)
  if(editUserData.firstName == '') editUserData.firstName = user.firstName;
  if(editUserData.lastName == '') editUserData.lastName = user.lastName;
  if(editUserData.userRole == '') editUserData.userRole = user.userRole;
  if(editUserData.email == '') editUserData.email = user.email;
  if(editUserData.userPass == ''){
    alert('Enter password');
    return
  } else {
    console.log(editUserData);
    store.dispatch('editUser', editUserData).then(() => {
      store.dispatch('fetchUsers');
    });
    location.reload();
  }
}

  return{
    store,
    users,
    editUserData,
    editUser
  }
}
}
</script>
<style>
    .form-box {
  max-width: 300px;
  background: #f1f7fe;
  overflow: hidden;
  border-radius: 16px;
  color: #010101;
}

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
}

/*Form text*/
.title {
  font-weight: bold;
  font-size: 1.6rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
}

/*Inputs box*/
.form-container {
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  margin: 1rem 0 .5rem;
  width: 100%;
}

.input {
  background: none;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: .9rem;
  padding: 8px 15px;
}

.form-section {
  padding: 16px;
  font-size: .85rem;
  background-color: #e0ecfb;
  box-shadow: rgb(0 0 0 / 8%) 0 -1px;
}

.form-section a {
  font-weight: bold;
  color: #0066ff;
  transition: color .3s ease;
}

.form-section a:hover {
  color: #005ce6;
  text-decoration: underline;
}

/*Button*/
.form button {
  background-color: #0066ff;
  color: #fff;
  border: 0;
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .3s ease;
}

.form button:hover {
  background-color: #005ce6;
}
</style>