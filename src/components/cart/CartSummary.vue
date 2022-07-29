<template>
    <div class="space-cart-right">
        <div class="total-price">
            <h3>Total:</h3>
            <h3><b>R${{ cart_total.toFixed(2) }}</b></h3>
        </div>
        
        <button class="buy-product-button">Finalizar compra</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
})
</script>

<style lang="scss">
h3 {
    font-weight: 500;
}
.total-price {
    display:flex;
    justify-content: space-between;
    padding-bottom:0px;
    border-bottom:1px solid #eee;
}
.buy-product-button {
    width:100%;
    padding:20px;
    background: rgb(162,3,252);
    background: linear-gradient(153deg, rgba(162,3,252,1) 0%, rgba(193,1,254,1) 59%);
    border:none;
    color:#fff;
    color:#fff;
    text-transform: uppercase;
    border-radius:100px;
    font-weight: 600;
    margin-top:20px;
    cursor:pointer;
}
.buy-product-button:hover {
    opacity:0.8;
    transition:0.2s;
}
</style>