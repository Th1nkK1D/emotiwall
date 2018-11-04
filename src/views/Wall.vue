<template>
  <div class="wall">
    <div class="title">
      <h1>รู้สึกยังไงกับการศึกษาไทย?</h1>
    </div>
    <div class="emospaces">
      <EmojiSpace v-for="emo in countedVotes" :key="emo.type" :type="emo.type" :color="emoSetting[emo.type].color" :width="emo.count" />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import EmojiSpace from '@/components/EmojiSpace'

const db = firebase.database()

export default {
  name: 'Wall',
  components: {
    EmojiSpace
  },
  data () {
    return {
      emoSetting: {
        happy: {
          pos: 1,
          color: 'green'
        },
        sad: {
          pos: 2,
          color: 'blue'
        },
        angry: {
          pos: 3,
          color: 'red'
        }
      }
    }
  },
  firebase: {
    votes: {
      source: db.ref('/'),
      isObject: false
    }
  },
  computed: {
    countedVotes () {
      return this.votes.map(type => ({
        type: type['.key'],
        count: Object.keys(type).length - 1
      })).sort((a, b) => this.emoSetting[a.type].pos - this.emoSetting[b.type].pos)
    }
  }
}
</script>

<style lang="scss">
  .wall {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;

    .title {
      background-color: black;
      color: white;

      h1 {
        margin: 1.5rem 0;
      }
    }

    .emospaces {
      display: flex;
      flex-direction: row;
      height: 100%;
    }
  }
</style>
