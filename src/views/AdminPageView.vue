<template>
<div id="app">
    <div class="container">
      <h2 class="heading">Add Admins</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" v-model="newAdmin.name" placeholder="name">

              </td>
              <td><input type="text" v-model="newAdmin.location" placeholder="location"></td>
              <td>
                <input type="email" v-model="newAdmin.price">
              </td>
              <td>
                <input type="password" v-model="newAdmin.image">
              </td>
              <td>
                <button @click.prevent="addAdmin">Add Admin</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container mt-5">
      <h2 class="heading">Add Users</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  <div class="container mt-5 mb-5">
    <h2 class="heading">Add Getaways</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Password</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" v-model="newGetaways.firstname" placeholder="First Name">

            </td>
            <td><input type="text" v-model="newGetaways.lastname" placeholder="Last Name"></td>
            <td>
              <input type="email" v-model="newGetaways.email">
            </td>
            <td>
              <input type="password" v-model="newGetaways.password">
            </td>
            <td>
              <button @click.prevent="addGetaways">Add Getaways</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
    </div>
</template>

<script>
export default {
  name: 'AdminUsers',
  data() {
    return {
      newUser: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'user'
      },
      newAdmin: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'admin'
      },
      newGetaways: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: ''
      },
      users: [],
      admins: [],
      getaways:[]
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