<template>
    <tr>
        <td class="details">
            <img :src="product.image" />      
        </td>
        <td class="product-name">{{ product.name }}</td>
        <td class="button-container">
            <button class="remove" @click="removeFromCart()">-</button>
            <input :value="product.quantity" />
            <button class="add" @click="addToCart()">+</button>       
        </td>
        <td>R${{ item_cost.toFixed(2) }}</td>
        <td><button class="removeAll" @click="removeAllFromCart()"> <img src="../../assets/img/delete.png" /> </button> </td>
    </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['product'],
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        },
        removeAllFromCart() {
            this.$store.commit('removeAllFromCart', this.product)
        }
    },
    computed: {
        description(){
            return this.product.description.substring(0, 120)
        },
        item_cost() {
            return this.product.price * this.product.quantity
        }
    }
})
</script>

<style lang="scss">
.cart-item-card {
    border-radius:5px;
    padding:30px;
    text-align:left;
    
    .removeAll {
        background: none;
        border:none;
        cursor: pointer;
    }

    .removeAll:hover {
        opacity:0.7;
        transition:0.2s;
    }

    .header-cart {
        img {
            width:100%;
            max-width:40px;
        }

        .product-name {
            font-weight:600;
            font-size:12px;
        }
    }
}

.button-container {    
    input {
        height:20px;
        width:20px;
        text-align: center;
        font-size:12px;
        padding:0;
        border:1px solid #eee;
    }

    button {
        font-size:16px;
        top:5px;
        margin:0px 0px;
        height:20px;
        background: none;
        font-weight: 500;
        border:none;
    }
}

@media screen and (min-width:800px){
    .button-container {
        input {
            border:1px solid #eee;
            height:35px;
            width:35px;
            text-align: center;
            padding:0;
        }

        .remove {
            font-size:30px;
            position: relative;
            top:5px;  
        }

        button {
            background: none;
            font-weight: 500;
            border: none;
            font-size:22px;
            top:5px;
            margin:0px 8px;
            height:35px;
            position: relative;
            color:#9b9b9b;
            cursor:pointer;
        }
    }
}
</style>