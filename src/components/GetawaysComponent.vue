<template>
  <div class="container my-5">
    <h1 class="text-center mb-5 bg-info">Featured Getaways</h1>
    <div v-if="featuredGetaways" class="row">
      <div v-for="getaway in featuredGetaways" :key="getaway.id" class="col-md-4">
        <div class="card mb-4">
          <img :src="featuredGetaways.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ featuredGetaways.name }}</h5>
            <p class="card-text">{{ featuredGetaways.description }}</p>
            <ul class="list-unstyled">
              <li v-for="amenity in featuredGetaways.amenities" :key="amenity">{{ amenity }}</li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
  <p class="h4">R {{ featuredGetaways.price }}/night</p>
  <div>
    <button @click="addToCart(featuredGetaways)" class="btn btn-primary mr-2">Add to Cart</button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!featuredGetaways">
    <GetawaySpinnerE/>  
    </div>
    <h1 class="text-center my-5 bg-info">All Getaways</h1>
    <div class="row">
      <div v-for="product in products" :key="product.AirBnB_id" class="col-md-4">
        <div class="card mb-4">
          <img :src="product.image" class="card-img-top" >
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.location }}</p>
            <ul class="list-unstyled">
            </ul>
            <div class="d-flex justify-content-between align-items-center">
              <p class="h4">R {{ product.price }}/night</p>
              <button @click="addToCart(getaways)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GetawaySpinnerE from "./GetawaySpinnerE.vue";
import { useStore} from "vuex";
import { computed } from "@vue/runtime-core";

export default {
setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    let products = computed(() => store.state.products);
    return {
      products,
    };
  },
  components:{
    GetawaySpinnerE
  }
};

</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 15px;
  border-radius: 5px;
  height: 450px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.list-unstyled {
  margin: 0;
  padding: 0;
}

.card-body {
  height: 180px;
}

.btn {
  border-radius: 5px;
  margin-top: 10px;
}

</style>

