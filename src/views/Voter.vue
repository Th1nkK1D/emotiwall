<template>
  <div class="voter">
    <div class="title">
      <h1>รู้สึกยังไงกับการศึกษาไทย?</h1>
    </div>
    <div class="emolist">
      <Emoji type="happy" label="สุข" :votefn="vote" />
      <Emoji type="sad" label="เศร้า" :votefn="vote" />
      <Emoji type="angry" label="โกรธ" :votefn="vote" />
    </div>
  </div>
</template>

<script>
import Emoji from '@/components/Emoji'
import firebase from 'firebase/app'

const db = firebase.database()

export default {
  name: 'Voter',
  components: {
    Emoji
  },
  methods: {
    vote (name) {
      const date = new Date()

      db.ref(name).push({
        timestamp: date.toLocaleString()
      })
    }
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
