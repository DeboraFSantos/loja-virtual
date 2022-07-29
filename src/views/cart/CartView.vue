<template>
  <div class="cart-items">
    <h1>Carrinho</h1>
    <div class="column-cart">      
       <div class="column-cart-left">
          <div class="cart-item-card">
            <table class="header-cart">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                  <th>Excluir</th>
                </tr>
              </thead> 
               <CartItem
                  v-for="product in products"
                  :key="product.id"
                  :product="product"
                />
            </table>
          </div>
        </div>
        <div class="column-cart-right">
          <CartSummary />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartItem from '../../components/cart/CartItem.vue';
import CartSummary from '../../components/cart/CartSummary.vue';

type NewType = any;

export default  defineComponent({
  
  components: {
    CartItem,
    CartSummary
  },
  computed: {
    products(): NewType {
      return this.$store.getters.cartItems
    }
  }
})
</script>

<style lang="scss">
body {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

h1 {
  border-bottom:1px solid #eee;
  padding-bottom:16px;
}

.column-cart-left, .column-cart-right {
  background:#fff;
  border-radius:10px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  tr {

    border-bottom:1px solid #eee;

    td, th {
      text-align: center;
    }

    td {
      padding:30px 0px;
      font-size:13px;
      color:#5b5b5b;
    }

    th {
      text-transform: uppercase;
      font-size:0.7rem;
      color:#9b9b9b;
      font-weight: 500;
      padding-bottom:15px;
      border-bottom:1px solid #eee;
    }
  }
}

tr:last-child {
  border-bottom:none;
  padding:0px 0px;

  td {
    padding:30px 0px 0px; 
  }
}

@media screen and (min-width:800px){
  .column-cart {
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;

    .column-cart-left {
      flex-basis:68%; 
    }

    .column-cart-right {
      flex-basis:30%;
      max-height: 240px;
    }
  }
}

.space-cart-right {
  padding:40px
}

.cart-items {
  width:90%;
  margin:0 auto;

  h1 {
    color:#5b5b5b;
    font-size:1.6rem;
  }
}

.column-cart-left {
  flex-basis:100%;
  margin-bottom:30px;
  -webkit-box-shadow: 0px 1px 19px 0px rgba(0,0,0,0.03); 
  box-shadow: 0px 1px 19px 0px rgba(0,0,0,0.03);
}

.column-cart-right {
  flex-basis:100%;
  -webkit-box-shadow: 0px 1px 19px 0px rgba(0,0,0,0.03); 
  box-shadow: 0px 1px 19px 0px rgba(0,0,0,0.03);
}
</style>
