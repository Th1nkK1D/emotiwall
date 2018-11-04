<template>
  <div class="emoji-space" :style="{
    backgroundImage: 'linear-gradient('+color[0]+', '+color[1]+')',
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
    transition: flex 0.8s cubic-bezier(0.64, 0.57, 0.67, 1.53);

    img {
      height: 15vw;
      margin: auto;
    }
  }
</style>
