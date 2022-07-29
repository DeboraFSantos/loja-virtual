/* eslint-disable */

<template>
  <nav>
    <div class="inner-nav">
      <router-link :class="{active: $route.name === 'Home'}" to="/"><img  src="./assets/img/home.png" /></router-link>
      <router-link class="img-logo" to="/"><img  src="./assets/img/logo.png" /></router-link>
      <div class="nav-cart">
        <router-link :class="{active: $route.name === 'Cart'}" to="/carrinho">
          <img src="./assets/img/cart.png" />
        </router-link>
      </div>
    </div> 
  </nav>
  <router-view/>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted(): void {
    this.$store.commit('updateCartFromLocalStorage')
  } 
})
</script>


<style lang="scss">

@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  src: local("Montserrat"),
   url(./assets/fonts/Montserrat-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 600;
  src: local("Montserrat"),
   url(./assets/fonts/Montserrat-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  src: local("Montserrat"),
   url(./assets/fonts/Montserrat-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 800;
  src: local("Montserrat"),
   url(./assets/fonts/Montserrat-ExtraBold.ttf) format("truetype");
}

#app {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin:0;
  padding:0;
  overflow-x:hidden;
  
}

body {
  background-color:#f9f9f9;
}

nav {
  padding: 10px;
  width: 100%;
  background-color: white;
  border-bottom:1px solid #eee;

  .inner-nav {
    width:90%;
    margin: 0px;
    display:flex;
    align-items: center;
    justify-content: space-between;

      img {
        width:48%;
      }

      a {
        color:#222;
        text-transform: uppercase;
        text-decoration: none;
        margin: 0 5px 0px;
        font-size:0.9rem;

        &.active {
          color:#a9a9a9;
        }

        img {
          width:60%;
          position: relative;
          left:8px;
        }

        .nav-cart {
          width:60px;
          position: relative;       
        }
      }
  }
}

.quantity-cart {
  position: absolute;
  top:10px;
  background: rgb(162,3,252);
  background: linear-gradient(153deg, rgba(162,3,252,1) 0%, rgba(193,1,254,1) 59%);
  color:#fff;
  padding:4.31px 8px;
  font-size:0.7rem;
  border-radius: 100%;
  font-weight: bold;
  max-width:22.61px;
}

.text-center {
  text-align: center;
}

.img-logo {
  width:100%;
}

@media screen and (min-width:800px){
  .img-logo {
    width:24%;
  }

  nav {
    .inner-nav {
      width:80%;
      margin: 0 auto;
      display:flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
