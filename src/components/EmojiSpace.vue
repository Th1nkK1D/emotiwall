<template>
  <div class="emoji-space" :style="{
    backgroundColor: color,
    flex: width+' '+width+' 0'
  }">
    <img :src="require('@/assets/emotions/'+type+'.gif')" alt="">
  </div>
</template>

<script>
export default {
  name: 'EmojiSpace',
  props: ['type', 'color', 'width']
}
</script>

<style lang="scss" scoped>
  .emoji-space {
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
      height: 15vw;
      margin: auto;
    }
  }
</style>
