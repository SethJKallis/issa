<template>
<div class="container mt-5">
    <h1 class="text-center mb-4">Login</h1>
    <form @submit.prevent="login" class="needs-validation" novalidate>
        <div class="form-group">
        <label for="email">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email" required>
        <div class="invalid-feedback">
            Please enter a valid email address.
            </div>
        </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required>
        <div class="invalid-feedback">
            Please enter your password.
        </div>
        </div>
    <button type="submit" class="btn btn-primary btn-block">Login</button>
    </form>
</div>
</template>

<script>
export default {
data() {
    return {
        email: '',
        password: ''
    }
},
methods: {
    login() {
      // Perform login logic here, e.g. send login request to API
        console.log(`Logging in with email ${this.email} and password ${this.password}`)

      // After a successful login, redirect user to dashboard page
        this.$router.push('/dashboard')
    }
}
}
</script>

<style scoped>
.form-group label {
  font-weight: bold;
}

.form-group input {
  border-radius: 0;
}

.form-group input:focus {
  border-color: #80bdff;
  box-shadow: none;
}

.invalid-feedback {
  display: none;
}

.form-control:focus ~ .invalid-feedback {
  display: block;
  color: #dc3545;
}
</style>
