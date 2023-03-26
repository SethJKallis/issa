<template>
<div id="app">
    <div class="container">
      <h2 class="heading mt-5">USERS</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Role</th>
              <th>Edit/Del</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
              <td>
                {{ user.firstName }}
              </td>
              <td>
                {{ user.lastName }}
              </td>
              <td>
                {{ user.email }}
              </td>
              <td>
                {{ user.userRole }}
              </td>
              <td>
                <EditUser :user="user"/>
                <button class="btn btn-danger" v-on:click="deleteUser(user)">Del</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
            <tr>
              <td><input class="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" v-model="newUser.firstName" required></td>
              <td><input class="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name" v-model="newUser.lastName" required></td>
              <td><input class="form-control" type="text" name="userRole" id="userRole" placeholder="admin/user" v-model="newUser.userRole" required></td>
              <td><input class="form-control" type="email" name="email" id="email" placeholder="Email Address" v-model="newUser.email" required></td>
              <td><input class="form-control" type="password" name="userPass" id="userPass" placeholder="Password" v-model="newUser.userPass" required></td>
            </tr>
          </tfoot>
        </table>  
          <button class="btn btn-primary" @click.prevent="addUser">Add User </button>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <h2 class="heading">AirBnB</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Edit/Del</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <td>{{ product.name }}</td>
              <td>{{ product.location }}</td>
              <td>R{{ product.price }}</td>
              <td>{{ product.description }}</td>
              <td><img :src="product.image" alt="" width="100" height="100"></td>
              <td><button class="btn btn-danger" v-on:click="deleteAirBnB(product)">Del</button></td>
            </tr>


          </tbody>
          <tfoot>
            <tr>
              <td><input type="text" name="Name" id="Name" placeholder="Name" v-model="newAirBnB.name"></td>
              <td><input type="text" name="location" id="location" placeholder="Location" v-model="newAirBnB.location"></td>
              <td><input type="number" name="price" id="price" placeholder="Price" v-model="newAirBnB.price"></td>
              <td><input type="text" name="description" id="description" placeholder="Description" v-model="newAirBnB.description"></td>
              <td><input type="text" name="image" id="image" placeholder="Image URL" v-model="newAirBnB.image"></td>
            </tr>
          </tfoot>
        </table>
        <button class="btn btn-success" v-on:click="addAirBnB">Add AirBnB</button>
      </div>
    </div >
    </div>
</template>

<script>
import {useStore} from 'vuex';
import { computed } from 'vue';
import EditUser from '@/components/EditUser.vue';
export default {
  name: 'AdminUsers',
  setup(){
    const store = useStore();

    let newUser = {
      firstName: '',
      lastName: '',
      email: '',
      userPass: '',
      userRole: 'user'
    }
    let newAirBnB = {
      name: '',
      location: '',
      price: '',
      image: '',
      description: ''
    }

    store.dispatch('fetchUsers');
    let users = computed(() => store.state.users);

    store.dispatch('fetchProducts');
    let products = computed(() => store.state.products)

    async function addUser() {
      if(newUser.firstName == '' || newUser.lastName == '' || newUser.email == '' || newUser.userPass == '') alert("PLEASE FILL OUT ALL FIELDS");
      else {
        await store.dispatch('register', newUser);
        store.dispatch('fetchUsers');
      }
    }
    async function deleteUser(user){
      await store.dispatch('deleteUser', user.userID);
      await store.dispatch('fetchUsers');

    }
    async function addAirBnB(){
      if(newAirBnB.image == '') delete newAirBnB.image;
      if(
      newAirBnB.name == '' || 
      newAirBnB.location == '' || 
      newAirBnB.price == '' || 
      newAirBnB.description == '') alert('PLEASE FILL OUT ALL FIELDS!')
      else{
        await store.dispatch('addProduct', newAirBnB);
        store.dispatch('fetchProducts')
      }
    }
    async function deleteAirBnB(product){
      await store.dispatch('deleteProduct', product.airbnbID);
      await store.dispatch('fetchProducts')
    }

    
    return{
      users,
      products,
      newUser,
      newAirBnB,
      addUser,
      deleteUser,
      addAirBnB,
      deleteAirBnB
    }
  },
  components:{
    EditUser
  }

}
</script>

<style scoped> /* Style the table and form */ table { border-collapse: collapse;
width: 100%; } th, td {
text-align: left;
padding: 8px;
border-bottom: 1px solid #ddd; } th { background-color:
#f2f2f2; } input, select {
  width: 100%;
  padding: 6px 10px;
  margin: 8px 0;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px; } button { color: white;
padding: 8px 16px;
border: none;
border-radius: 4px;
cursor: pointer; }

button:hover { background-color: #00008B; }
.table-container { margin-top: 16px; } 
</style>