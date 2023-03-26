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
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
              <td>
                {{ user.first_name }}
              </td>
              <td>
                {{ user.last_name }}
              </td>
              <td>
                {{ user.email }}
              </td>
              <td>
                {{ user.userpassword }}
              </td>
            </tr>
          </tbody>
        </table>  
          <button @click.prevent="addAdmin">Add User </button>
      </div>
    </div>
    <div class="container mt-5">
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <td>{{ product.name }}</td>
              <td>{{ product.location }}</td>
              <td>R{{ product.price }}</td>
              <td>{{ product.description }}</td>
              <td><img :src="product.image" alt="" width="100" height="100"></td>
            </tr>
            <!-- <tr>
              <td>
                <input type="text" v-model="newUser.firstname" placeholder="First Name">
              </td>
              <td>
                <input type="text" v-model="newUser.lastname" placeholder="Last Name">
              </td>
              <td>
                <input type="email" v-model="newUser.email">
              </td>
              <td>
                <input type="password" v-model="newUser.password">
              </td>

              <td>
                <button @click.prevent="addUser">Add User</button>
              </td>
            </tr> -->

          </tbody>
          <tfoot>
            <tr>
              <td><input type="text" name="Name" id="Name" placeholder="Name"></td>
              <td><input type="text" name="location" id="location" placeholder="Location"></td>
              <td><input type="number" name="price" id="price" placeholder="Price"></td>
              <td><input type="text" name="description" id="description" placeholder="Description"></td>
              <td><input type="text" name="image" id="image" placeholder="Image URL"></td>
            </tr>
          </tfoot>
        </table>
        <button class="btn btn-success">Add AirBnB</button>
      </div>
    </div>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import { computed } from 'vue';
export default {
  name: 'AdminUsers',
  setup(){
    const store = useStore();

    let newUser = {
      first_name: '',
      last_name: '',
      email: '',
      userpassword: '',
      userRole: 'user'
    }
    let newAdmin = {
      first_name: '',
      last_name: '',
      email: '',
      userpassword: '',
      userRole: 'admin'
    }
    let newAirBnB = {
      name: '',
      location: '',
      cellphoneNumber: '',
      price: '',
      image: '',
      description: ''
    }

    store.dispatch('fetchUsers');
    let users = computed(() => store.state.users);

    store.dispatch('fetchProducts');
    let products = computed(() => store.state.products)
    
    return{
      users,
      products,
      newUser,
      newAdmin,
      newAirBnB
    }
  },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = { firstname: '', lastname: '', email: '', password: '', role: 'user' };
    },
    addAdmin() {
      this.admins.push(this.newAdmin);
      this.newAdmin = { firstname: '', lastname: '', email: '', password: '', role: 'admin' };
    }
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
border-radius: 4px; } button { background-color: #0000FF; color: white;
padding: 8px 16px;
border: none;
border-radius: 4px;
cursor: pointer; }

button:hover { background-color: #00008B; }
.table-container { margin-top: 16px; } 
</style>