<template>
  <div class="voter">
    <div class="title">
      <h1>รู้สึกยังไงกับการศึกษาไทย?</h1>
    </div>
    <div class="emolist">
      <EmojiBotton type="happy" label="สุข" :votefn="vote" />
      <EmojiBotton type="sad" label="เศร้า" :votefn="vote" />
      <EmojiBotton type="angry" label="โกรธ" :votefn="vote" />
    </div>
  </div>
</template>

<script>
import EmojiBotton from '@/components/EmojiBotton'
import firebase from 'firebase/app'

const db = firebase.database()

export default {
  name: 'Voter',
  components: {
    EmojiBotton
  },
  methods: {
    vote (name) {
      const date = new Date()

      db.ref('votes/' + name).push({
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
      h1 {
        margin-bottom: 0;
      }
    }

    .emolist {
      display: flex;
      justify-content: row;
      justify-content: center;
      height: 100%;
      margin-bottom: 15vh;
    }
  }
</style>
