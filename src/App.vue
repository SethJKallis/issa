<template>
<NavBar/>
<FooterComponent/>
<router-view/>
</template>

<script>
import NavBar from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    FooterComponent
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #edf0f3;
}

nav a.router-link-exact-active {
  color: #1aa9ae;
}

</style>
