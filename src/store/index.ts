import { createStore } from 'vuex'

function UpdateLocalStorage(cart: any[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

const newLocal:any[] = [];

export default createStore({
  state: {
    cart:newLocal
  },
  getters: {
    productQuantity: state => (product: { id: any; }) => {
      const item = state.cart.find(i => i.id === product.id)
    
      if (item) return item.quantity
      else return null
    },
    cartItems: state => {
      return state.cart
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0);
    }
  },
  mutations: {
   addToCart (state, product) {
    const item = state.cart.find( i => i.id === product.id )
    if (item){
      item.quantity++
    } else {
      state.cart.push({...product, quantity: 1})
    }

    UpdateLocalStorage(state.cart)
  },
  removeFromCart (state, product) {
    const item = state.cart.find(i => i.id === product.id)

    if(item) {
      if (item.quantity > 1){
        item.quantity--
      } else {
        state.cart = state.cart.filter( i => i.id !== product.id )
      }
    }

    UpdateLocalStorage(state.cart)
  },
  removeAllFromCart (state, product) {
    const item = state.cart.find(i => i.id === product.id)

    if(item) {
      if (item.quantity >= 1){
        item.quantity = item.quantity - item.quantity;
      } 

      if (item.quantity == 0){
        state.cart = state.cart.filter( i => i.id !== product.id )
      }
    }

    UpdateLocalStorage(state.cart)
  },
  updateCartFromLocalStorage(state){
    const cart = localStorage.getItem('cart')
    if(cart) {
      state.cart = JSON.parse(cart)
    }
  }
  },
  actions: {

  },
  modules: {
  }
})
