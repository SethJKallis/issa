import { createStore } from 'vuex';
import axios from 'axios';

const apiLink='https://capstoneapi2.onrender.com';

export default createStore({
  state: {
  user: null,
  users: null,
  product: null,
  products: null,
  spinner:true,
  jwToken:null
},
  mutations: {
    setUser: (state, user) =>{
      state.user = user;
    },
    setUsers: (state, users) =>{
      state.users = users;
  },
    setProduct: (state, product) =>{
      state.product = product;
  },
    setProducts: (state, values) =>{
      state.products = values;
  },
    setSpinner: (state, spinner) =>{
      state.spinner = spinner;
  },
    setToken: (state, jwToken) =>{
      state.jwToken = jwToken;
  },
  },
  actions: {
    async fetchUsers(context){
      let results = await axios.get(`${apiLink}/users`);
      let {res, err} = await results.data;
      if(res){
        context.commit('setUsers',res);
        context.commit('setSpinner', false)
      }else{
        context.commit('setMessage', err);
      }
    },
    async fetchUserByID(context, id){
      let result = await axios.get(`${apiLink}/users/${id}`);
      let {res, err} = await result.data;
      if(res){
        context.commit('setUsers',res);
        context.commit('setSpinner', false)
      }else{
        context.commit('setMessage', err);
      }
    },
    async register(context, payload){
      let result = await axios.post(`${apiLink}/register`, payload);
      let {res, err} = await result.data;
      if(res){
        context.commit('setUsers',res);
        context.commit('setSpinner', false)
      }else{
        context.commit('setMessage', err);
      }
    },

    async login(context, payload){
      let result = await axios.post(`${apiLink}/login`, payload);
      let {res, err, jwToken} = await result.data;
      if(res){
        context.commit('setUser',res);
        context.commit('setToken',jwToken);
        context.commit('setSpinner', false)
      }else{
        context.commit('setMessage', err);
      }
    },


    async fetchProducts(context) {
      const res = await axios.get(`${apiLink}/products`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProducts', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
      console.log(apiLink);
},
    async fetchProduct(context, id) {
      const res = await axios.get(`${apiLink}/products/${id}`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProduct', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
      console.log(apiLink);
},
    async deleteProduct(context) {
      const res = await axios.delete(`${apiLink}/products`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProduct', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
      console.log(apiLink);
},
},
  modules: {
  }
})

