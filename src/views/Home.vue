<template>
  <div>
    <div>'Vuex-state:'{{text}}</div>
    <div>'vuex-getter:'{{getText}}</div>
    <button @click="setText(456)">修改text</button>
    <button @click="add(123)">修改text</button>
    <div class="img"></div>
  </div>
</template>
<script>
import {mapGetters, mapState, mapActions, mapMutations} from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapState(['text']),
    ...mapGetters(['getText'])
  },
  methods:{
    ...mapActions(['setText']),
    ...mapMutations({
      add:'setText'
    })
  }
}
</script>