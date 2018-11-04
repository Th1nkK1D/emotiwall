<template>
  <div class="emoji">
    <img :src="require('@/assets/emotions/'+file+'.gif')" alt="">
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'Emoji',
  props: ['file', 'label']
}
</script>

<style lang="scss" scoped>
  .emoji {
    text-align: center;

    img {
      width: 30vw;
      height: auto;
    }

    p {
      font-size: 4vw;
      margin: -3vw 0 0 0;
    }
  }
</style>
