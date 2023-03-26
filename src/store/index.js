import { createStore } from 'vuex';
import axios from 'axios';

const apiLink='http://localhost:4000';

export default createStore({
  state: {
  user: null,
  users: null,
  product: null,
  products: null,
  spinner:true,
  jwToken:null,
  message:null
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
  setMessage(state, message){
    state.message = message
  }
  },
  actions: {
    async fetchUsers(context){
      let res = await axios.get(`${apiLink}/users`);
      let {results, err} = await res.data;
      if(results){
        context.commit('setUsers',results);
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
    async editUser(context, payload){
      let result = await axios.put(`${apiLink}/user/${payload.userID}`,payload);
      let {res, err} = await result.data;
      if(res){
        context.commit('setMessage', res)
      } else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id){
      let result = axios.delete(`${apiLink}/user/${id}`);
      let {res,err} = await (await result).data;
      if(res){
        context.commit('setMessage', res);
      } else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload){
      let result = await axios.post(`${apiLink}/register`, payload);
      let {res, err} = await result.data;
      if(res){
        context.commit('setMessage',res);
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
//     async deleteProduct(context) {
//       const res = await axios.delete(`${apiLink}/products`);
//       const {results, err} = await res.data;
//       if(results) {
//           context.commit('setProduct', results);
//           context.commit('setSpinner', false);
//       }
//       if(err) {
//           context.commit('setMessage', err)
//       }
// },
async addProduct(context, payload){
  const result = await axios.post(`${apiLink}/product`, payload);
  let {res,err} = await result.data;
  if(res){
    context.commit('setMessage', res)
  } else {
    context.commit('setMessage', err)
  }
},
async deleteProduct(context, id){
  const result = await axios.delete(`${apiLink}/product/${id}`);
  let {res,err} = await result.data;
  if(res){
    context.commit('setMessage', res)
  } else {
    context.commit('setMessage', err);
  }
}
},
  modules: {
  }
})

