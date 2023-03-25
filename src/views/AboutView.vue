<template>
  <div class="about">
    <h1>Welcome to the HiveHouse</h1>
    <p>Discover the best Airbnb stop around. Also known as HouseHive, it's the perfect getaway for an overnight stay or a quick rejuvenation. Experience the perfect fusion of leisure and pleasure at our getaways.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://i.postimg.cc/kMKZVGQD/bc88423ce1cf987a3ad345c29be81923.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
}

.about h1 {
  color: white;
  font-size: 5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
}

.about p {
  color: white;
  font-size: 2rem;
  text-align: center;
  line-height: 1.5;
  max-width: 800px;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
}
</style>


