<template>
  <!-- Nav-Bar -->
  <nav class="navbar navbar-dark bg-dark navigation-bar d-flex align-items-center justify-content-end w-100">
    <button
      class="navbar-toggler mb-4 me-4"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="offcanvas offcanvas-end text-bg-dark"
      tabindex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            
            <router-link to="/about" class="nav-link d-flex">
              <i class="bi bi-exclamation-circle-fill"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/getaway" class="nav-link">Getaways</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Page</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="hello"></div>
</template>

<script>
export default {
  name: "HomeView",
    props: {
    msg: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap");

.navigation-bar {
  height: 10vh;
  position: fixed;
  z-index: 10;
  border: 3px solid black;
  margin-right: 10px;
}



.button{
    background-color: black;
}
.nav{
    background-color: black;
}

h3 {
  margin: 40px 0 0;
}

ul {
  margin-top: 3rem;
  list-style-type: none;
  width: 100%;
}

li {
  display: inline-block;
}

.first-color {
  background: #5dacbd;
}

.second-color {
  background: #24527a;
}

.third-color {
  background: #a7bcb9;
}

.nav-link {
  color: #388ced;
  font-size: 25px;
  font-weight: 800;
  text-decoration: none;
  padding-left: 2rem;
  height: 5rem;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  background: #bbb8b8;
  color: #5dacbd;
  font-size: 25px;
}

.nav-link:active {
  color: #141313;
  font-size: 25px;
}

.logo {
  font-family: "Londrina Shadow", cursive;
}
</style>
