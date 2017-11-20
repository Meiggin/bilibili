<template>
<div>
<!-- 		<el-radio v-model="radio" label="1">备选项</el-radio>
	<el-radio v-model="radio" label="2">备选项</el-radio> -->
<!-- 	<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list">{{ item }}</li>
</ul> -->
	<router-view></router-view>
</div>

</template>

<script>
export default {

  name: 'channel',

  data () {
    return {
    	radio:1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>