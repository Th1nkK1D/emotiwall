<template>
  <div class="home">
    <h1>Emotiwall Beta</h1>

    <h3>Page:</h3>
    <router-link to="voter">Vote</router-link>
    <router-link to="wall">Wall</router-link>

    <h3>Setting:</h3>
    <a href="#" @click="reset()">Reset</a>

    <h3>Credit:</h3>
    <span>@ <a href="https://th1nkk1d.github.io" target="_blank">Th1nkK1D</a> 2018 - </span>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase/app'

export default {
  name: 'home',
  methods: {
    reset () {
      firebase.database().ref('/votes').set({})
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10vh;
    margin: auto;
    color: white;
    background: linear-gradient(#81C6AA, #2792BC);

    a {
      color: white;

      &:hover {
        color: lightgray;
      }
    }

    h1 {
      margin: 0;
    }

    h3 {
      margin: 2rem 0 0 0;
    }
  }
</style>
