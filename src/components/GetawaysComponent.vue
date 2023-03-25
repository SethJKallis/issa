<template>
  <div class="container my-5">
    <h1 class="text-center mb-5 bg-info">Featured Getaways</h1>
    <div v-if="featuredGetaways" class="row">
      <div v-for="getaway in featuredGetaways" :key="getaway.id" class="col-md-4">
        <div class="card mb-4">
          <img :src="getaway.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ getaway.name }}</h5>
            <p class="card-text">{{ getaway.description }}</p>
            <ul class="list-unstyled">
              <li v-for="amenity in getaway.amenities" :key="amenity">{{ amenity }}</li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
  <p class="h4">$ {{ getaway.price }}/night</p>
  <div>
    <button @click="addToCart(getaway)" class="btn btn-primary mr-2">Add to Cart</button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else><GetawaySpinner></GetawaySpinner>  </div>
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
};
//   data(){
//   return {
//     products:null,
//     isLoading: true,
//   }
//   },
//   methods: {
//     async getGetaways (){
//       let res = await axios.get();
//       let{results} =await res.data;
//       this.products = results;
//     },
//     addToCart(product){
//       alert(`${product.prodName} added to cart!`);
//     },
//     methods:{
//       sortbyPrice(){
//         if (this.sortDir === "asc") {
//           this.products.sort((a,b) => a.prodPrice - b.prodPrice);
//           this.sortDir = "desc";
//         } else{
//           this.products.sort((a,b) => b.prodPrice - a.prodPrice);
//           this.sortDir = "asc";
//         }
//         },
//               sortbyCategory() {
//         this.products.sort((a, b) => {
//           if (a.category < b.category) {
//             return 1;
//           } else if (a.category > b.category) {
//             return 1;
//           } else {
//             return 0;
//           }
//         });
//       }
//     }
//   },
// }

//   components: {
//     GetawaySpinner
//   },
//         {
//           id: 1,
//           name: 'Beach House',
//           description: 'Beautiful beach house with ocean view.',
//           amenities: ['Ocean view', 'Private pool', 'Beach access'],
//           image: 'https://i.postimg.cc/hGGwfbWZ/483714640999c33283530c80ba97f837.jpg',
//           price: 500
//         },
//         {
//           id: 2,
//           name: 'Mountain Retreat',
//           description: 'Cozy cabin in the mountains.',
//           amenities: ['Mountain view', 'Hot tub', 'Hiking trails'],
//           image: 'https://i.postimg.cc/jjmBJwhH/953bd8ae4960d5e2bf1e5e29d0775601.jpg',
//           price: 1400
//         },
//         {
//           id: 3,
//           name: 'City Apartment',
//           description: 'Modern apartment in the heart of the city.',
//           amenities: ['City view', 'Gym', 'Concierge'],
//           image: 'https://i.postimg.cc/SKFPTHJB/add10db0dc5becc62931975e557ae66c.jpg',
//           price: 300
//         },
//         {
//           id: 4,
//           name: 'Lake House',
//           description: 'Peaceful lake house with a dock and boat access.',
//       amenities: ['Lake view', 'Dock', 'Boat access'],
//       image: 'https://i.postimg.cc/SKFPTHJB/add10db0dc5becc62931975e557ae66c.jpg',
//       price: 450
//     },
//     {
//       id: 5,
//       name: 'Desert Oasis',
//       description: 'Luxurious oasis in the middle of the desert.',
//       amenities: ['Desert view', 'Private pool', 'Spa'],
//       image: 'https://i.postimg.cc/vB3h7KRw/feaf7c0a48492fea9888c34c7e8e1d12.jpg',
//       price: 600
//     },
//     {
//       id: 6,
//       name: 'Island Getaway',
//       description: 'Private island with stunning ocean views.',
//       amenities: ['Island view', 'Private beach', 'Infinity pool'],
//       image: 'https://i.postimg.cc/3N2gSfVw/ce7f62a3a77a1abec16550332bc1abe4.jpg',
//       price: 800
//     }

//   ],
//   cart: []
// };
// },
// computed: {
// featuredGetaways() {
// // return a subset of getaways to be featured
// return this.Getaway.slice(0, 3);
// },
// allGetaways() {
// // return all getaways except for the featured ones
// return this.Getaway.slice(3);
// }
// },
// methods: {
// addToCart(getaway) {
// add the selected getaway to the cart
// this.cart.push(getaway);
// }
// }
// };
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

