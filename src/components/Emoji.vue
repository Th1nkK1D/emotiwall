<template>
  <div class="emoji">
    <img :src="require('@/assets/emotions/'+type+'.gif')" alt="" @click="() => votefn(type)">
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'Emoji',
  props: ['type', 'label', 'votefn']
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
