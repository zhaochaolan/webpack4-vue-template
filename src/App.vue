<template>
  <div>
    <!--<div class="text">{{ text }}</div>
    <input type="text" v-model="text" />-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return{
      text:'测试'
    }
  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
  .text{
    color: #f00;
  }
</style>