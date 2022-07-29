<template>
    <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')"></div>

    <div class="drawer" :class="{show: active}">
        <div class="drawer-close" @click="$emit('close-product-drawer')">
            X
        </div>

        <div v-if="product" class="product-details">
            <img :src="product.image" />
            <h3 class="text-center">{{ product.name }}</h3>
            <p class="description">
                {{ product.description }}
                
            
                <span class="text-center">
                    {{ product.price }}
                </span>
    
            </p>

            <div class="button-container-buy">
                <button class="add" @click="addToCart()">Adicionar ao carrinho</button>           
            </div>

            <div class="cart-details" v-if="product_total">
                <h3>Adicionado ao carrinho: {{ product_total }}</h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['product', 'active'],
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
            this.$router.push('/carrinho'); 
        },
        removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        }
    },
    computed: {
        product_total() {
            return this.$store.getters.productQuantity(this.product);
        }
    }
})
</script>

<style lang="scss">
.drawer-background {
    width:100%;
    height:100vh;
    position:fixed;
    left:0;
    opacity:0.8;
    top:0;
    background-color:#eee;
    z-index:100;
    display:none;
    transition:display .5s;

    &.show {
        display:block;
    }
}

.drawer {
    width:100vw;
    height:100vh;
    background-color:white;
    position:fixed;
    top:0;
    left:-105vw;
    transition: left .5s;
    z-index:101;
    overflow-y:scroll;

    &.show {
        left:0;
    }
}

.drawer-close {
    font-size:1rem;
    padding: 5px 7.5px;
    border-radius: 100%;
    margin:20px 20px 0px;
    border: 1px solid gray;
    color:gray;
    width:15px;
    float:right;
    cursor:pointer;

    &:hover {
        background-color: lightgray;
    }
}

.product-details {
    display:flex;
    justify-content:center;
    flex-direction: column;
    width:100%;
    align-items: center;
    margin-bottom:40px;

    img {
        width:80%;
    }

    h3 {
        font-weight:700;
        padding-top:30px;
    }

    h3, h2, h1 {
        margin:0;
    }

    p.description {
        padding:15px 35px 20px;
        font-size:13px;
        text-align:justify;
        text-align-last: center;
    }

    .button-container-buy {
        button {
            padding: 15px 32px;
            background: rgb(162,3,252);
            background: linear-gradient(153deg, rgba(162,3,252,1) 0%, rgba(193,1,254,1) 59%);
            border:none;
            color:white;
            text-transform: uppercase;
            border-radius:100px;
            font-size:1rem;
            font-weight: 600;
            cursor:pointer;
            border:none;
        }

        button:hover {
            transition:0.2s;
            opacity:0.8;
        }
    }

    .cart-details {
        margin:0px 0px 0px;
        font-size:0.8rem;
        text-transform: uppercase;
        color:#a9a9a9;
    }
}

@media (min-width: 500px){
    .drawer {
        width:450px;
    }
}
</style>