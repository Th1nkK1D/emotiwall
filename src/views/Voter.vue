<template>
  <div class="voter">
    <div class="title">
      <h1>รู้สึกยังไงกับการศึกษาไทย?</h1>
    </div>
    <div class="emolist">
      <Emoji file="happy" label="สุข" />
      <Emoji file="sad" label="เศร้า" />
      <Emoji file="angry" label="โกรธ" />
    </div>
  </div>
</template>

<script>
import Emoji from '@/components/Emoji'

export default {
  name: 'Voter',
  components: {
    Emoji
  }
}
</script>

<style lang="scss" scoped>
  .voter {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;

    .title {
      font-size: 3vw;
      margin: 0;

      h1 {
        margin-bottom: 0;
        letter-spacing: 0.3rem;
      }
    }

    .emolist {
      display: flex;
      justify-content: row;
      justify-content: center;
      height: 100%;
      margin-bottom: 15vh;

      .emoji {
        margin: auto 0;
      }
    }
  }
</style>
