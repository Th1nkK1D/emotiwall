<template>
  <div class="emoji-button">
    <img :src="require('@/assets/emotions/'+type+'.gif')" alt="" @click="() => votefn(type)">
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'EmojiBotton',
  props: ['type', 'label', 'votefn']
}
</script>

<style lang="scss" scoped>
  @keyframes bounce {
      0%   {transform: scale(1)}
      50%  {transform: scale(1.2)}
      100% {transform: scale(1)}
  }

  .emoji-button {
    text-align: center;

    img {
      width: 30vw;
      height: auto;

      &:active {
        animation-name: bounce;
        animation-duration: .2s;
        transition-timing-function: ease-in-out;
      }
    }

    p {
      font-size: 4vw;
      margin: -3vw 0 0 0;
    }
  }
</style>
