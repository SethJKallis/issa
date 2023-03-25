<template>
  <div class="home">
    <div class="home-text">
      <h1>Welcome to the HiveHouse</h1>
      <p>A stylish and comfortable home away from home</p>

            <router-link to="/login" class="btn btn-primary">Login</router-link>
            <router-link to="/register" class="btn btn-primary">Register</router-link>
    </div>
    <video autoplay loop>
      <source src="../assets/Home_page.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.home-text {
  text-align: center;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

video {
  height: 100%;
}

h1 {
  font-size: 5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 2rem;
  margin-bottom: 3rem;
}

.btn {
  font-size: 1.5rem;
  padding: 1rem 3rem;
  border-radius: 2rem;
  background-color: #ff5a5f;
  border-color: #ff5a5f;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>