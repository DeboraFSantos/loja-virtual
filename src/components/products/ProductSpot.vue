<template>
    <div>
        <div class="card">
            <img :src="item.image" />
            <div class="infos-product">
                <h3> {{ item.name }}</h3>
                <h5 class="price">Por <b>R${{ item.price }}</b></h5>
                <button class="view-product-button" @click="$emit('view-product', item)">Comprar</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['item'],
    computed: {
        description(): any {
            return this.item.description.substring(0, 150)
        }
    }
});
</script>

<style lang="scss">
.card {
    width:80%;
    margin: 10%;
    border-radius:10px;
    background-color:#fff;
    border:1px solid #eee;

    img {
        width:55%;
        margin:20px;
    }

    .infos-product {
        width:100%;
        border-top:1px solid #eee;
        height:100%;
        padding-bottom:30px;
    }

    h3 {
        color:#222;
    }

    h5.price {
        color:#222;
        margin:18px 0;
        font-size:1.3rem;
        font-weight: 500;
    }

    h5.price b {
        font-weight: 700;
    }

    p.description {
        font-size: .85rem;
    }

    p.text-cat {
        color:#e11;
    }

    button.view-product-button {
        padding: 10px 23px;
        background: rgb(162,3,252);
        background: linear-gradient(153deg, rgba(162,3,252,1) 0%, rgba(193,1,254,1) 59%);
        border:none;
        color:white;
        text-transform: uppercase;
        border-radius:100px;
        font-size:0.9rem;
        font-weight: 600;
        cursor:pointer;
    }

    button.view-product-button:hover {
        transition:0.2s;
        opacity:0.8;
    }
}

@media screen and (min-width:600px){
    .card {
        width:350px;
        margin:10px;
    }
}
</style>