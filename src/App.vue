<template>
  <div id="app">
    <navbar>
      <i class='iconfont icon-moreunfold' @click="isShow=!isShow"></i>
    </navbar>
    <sidebar v-model='isShow'>
      <i class='iconfont icon-less top' @click="isShow=!isShow"></i>
    </sidebar>
   
    <section>
      <router-view></router-view>
    </section>

  </div>
</template>

<script>
import navbar from '@/components/common/navbar';
import sidebar from '@/components/common/sidebar';

  export default{
    data(){
      return{
        datalist:[],
        isShow:false
      }
    },
    mounted(){

    },
    components:{
      navbar,
      sidebar
    },
    methods:{
      handleClick(value){
        this.isShow = value
      }
    }
  }
</script>

<style lang='scss' scoped>
*{
  margin:0;
  padding:0;
  list-style: none;
}
html,body{
  width:100%;
  height:100%;
}

.top{
        text-align: center;
        display:block;
        margin:10px;
}
section{
  position:relative;
  margin-top:10%;
  z-index: 1;
}
</style>
