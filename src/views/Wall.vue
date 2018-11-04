<template>
  <div class="wall">
    Wall
  </div>
</template>

<script>
import firebase from 'firebase/app'

const db = firebase.database()

export default {
  name: 'Wall',
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
      }))
    }
  }
}
</script>

<style lang="scss">

</style>
