<template>
    <div class="cart">
      <h1>Cart Page</h1>
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image" alt="Product Image">
        </div>
        <div class="product-info">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
          <button @click="
          addToCart(product)">Add to Cart</button>
          <router-link :to="{ name: 'product', params: { id: product.id } }">Take a look</router-link>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Product 1',
            description: 'This is the description for Product 1',
            price: 10.00,
            image: 'product1.jpg'
          },
          {
            id: 2,
            name: 'Product 2',
            description: 'This is the description for Product 2',
            price: 20.00,
            image: 'product2.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            description: 'This is the description for Product 3',
            price: 30.00,
            image: 'product3.jpg'
          }
        ],
        cart: []
      }
    },
    methods: {
      addToCart(product) {
        this.cart.push(product);
      }
    }
  }
  </script>

  <style>
  .modal {
  width: fit-content;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 26px;
  max-width: 450px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.payment--options {
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: 33% 34% 33%;
  gap: 20px;
  padding: 10px;
}

.payment--options button {
  height: 55px;
  background: #F2F2F2;
  border-radius: 11px;
  padding: 0;
  border: 0;
  outline: none;
}

.payment--options button svg {
  height: 18px;
}

.payment--options button:last-child svg {
  height: 22px;
}

.separator {
  width: calc(100% - 20px);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
  color: #8B8E98;
  margin: 0 10px;
}

.separator > p {
  word-break: keep-all;
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 11px;
  margin: auto;
}

.separator .line {
  display: inline-block;
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #e8e8e8;
  margin: auto;
}

.credit-card-info--form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input_container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.split {
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 15px;
}

.split input {
  width: 100%;
}

.input_label {
  font-size: 10px;
  color: #8B8E98;
  font-weight: 600;
}

.input_field {
  width: auto;
  height: 40px;
  padding: 0 0 0 16px;
  border-radius: 9px;
  outline: none;
  background-color: #F2F2F2;
  border: 1px solid #e5e5e500;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #242424;
  background-color: transparent;
}

.purchase--btn {
  height: 55px;
  background: #F2F2F2;
  border-radius: 11px;
  border: 0;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  background: linear-gradient(180deg, #363636 0%, #1B1B1B 50%, #000000 100%);
  box-shadow: 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #000000;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.purchase--btn:hover {
  box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0000003a;
}

/* Reset input number styles */
.input_field::-webkit-outer-spin-button,
.input_field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input_field[type=number] {
  -moz-appearance: textfield;
}
  </style>
