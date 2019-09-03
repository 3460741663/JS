<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <button @click="add(10)">+</button>
    <!-- <button @click="$store.commit('reduce')">-</button> -->
    <hr/>
    <p>{{data}}</p>
    <hr/>
    <p>{{money}}</p>
    <button @click="makeMoneyAction">掙錢</button>
  </div>
</template>

<script>
import store from '@/store/index.js'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  // computed: {
  //   data () {
  //     return this.$store.state.data
  //   }

  // },
  // computed: mapState(['data']),
  computed: {
    ...mapState(['data', 'money']),
    // count () {
    //   return this.$store.getter.count
    // }
    ...mapGetters(['count'])
  },
  // computed: mapState({
  //   data: state => state.data
  // }),
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['makeMoneyAction'])
  },
  store
}
</script>

<style scoped>

</style>
