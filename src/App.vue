<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: 'Sukhumvit';
    src: url('/fonts/SukhumvitSet-Text.ttf');
  }

  @font-face {
    font-family: 'Sukhumvit';
    src: url('/fonts/SukhumvitSet-Bold.ttf');
    font-weight: bold;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Sukhumvit';
  }

  #app {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 3vw;
    margin: 0;

    h1 {
      letter-spacing: 0.3rem;
    }
  }
</style>
