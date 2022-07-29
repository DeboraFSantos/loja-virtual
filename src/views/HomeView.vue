<template>
  <div class="home">
    <div class="products-cards">
      <ProductBuyArea
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer"
      />
      <ProductSpot 
        v-for="item in items"
        :key="item.id"
        :item="item"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Product from '../utils/items';
import ProductSpot from '../components/products/ProductSpot.vue';
import ProductBuyArea from '../components/products/ProductBuyArea.vue';

const newLocal:any[] = [];

export default defineComponent({
  name: 'HomeView',
  components: {
   ProductSpot,
   ProductBuyArea
  },
  data () {
    return {
      items: newLocal,
      product: null,
      active: {
        product_drawer: false
      }
    }
  },
  mounted() {
    Product.listar().then(response => {
      console.log(response.data)
      this.items = response.data
    })
    this.$store.commit('updateCartFromLocalStorage')
  },
  methods: {
    viewProduct(product: null){
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProductDrawer(){
      this.active.product_drawer = false;
    }
  }
});
</script>

<style lang="scss">
  .products-cards {
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top:20px;
  }
</style>