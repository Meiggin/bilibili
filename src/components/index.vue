<template>
  <div class="index">
    <swipe class="my-swipe">
      <swipe-item v-for="data in config" key='1'>
      <img :src='data.pic' />
    </swipe-item>
  </swipe>
  <!-- 推荐 -->
  <different>
  </different>
  <!-- 番剧 -->
  <differenta></differenta>
  <!-- 动画 -->
  <differentb></differentb>
  <!-- 国创 -->
  <differentc></differentc>
  <!-- 音乐 -->
  <differentd></differentd>
  <!-- 舞蹈 -->
  <differente></differente>
  <!-- 科技 -->
  <differentf></differentf>
  <!-- 游戏 -->
  <differentg></differentg>
  <!-- 鬼畜 -->
  <differenth></differenth>
  <!-- 广告 -->
  <differenti></differenti>
  <div class="footer">
    <p>哔哩哔哩 沪ICP备13002172号-3</p>
    <p>信息网络传播视听节目许可证：0910417</p>
  </div>
</div>
</template>
<script>
  import config from '@/data/jsonp.json';
  import "vue-swipe/dist/vue-swipe.css";
  import { Swipe,SwipeItem } from 'vue-swipe';
  import different from '@/components/common/different';
  import differenta from '@/components/common/differenta';
  import differentb from '@/components/common/differentb';
  import differentc from '@/components/common/differentc';
  import differentd from '@/components/common/differentd';
  import differente from '@/components/common/differente';
  import differentf from '@/components/common/differentf';
  import differentg from '@/components/common/differentg';
  import differenth from '@/components/common/differenth';
  import differenti from '@/components/common/differenti';
  import { Indicator } from 'mint-ui'
  export default {
    name: 'index',
    data () {
      return {
        config:[]
      }
    },
    created(){
      this.myswipe(config.data.archives);
    },
    methods:{
      myswipe(obj){
        this.config = obj
      }
    },
    components:{
      'swipe':Swipe,
      'swipe-item':SwipeItem,
      different,
      differenta,
      differentb,
      differentc,
      differentd,
      differente,
      differentf,
      differentg,
      differenth,
      differenti


    }
  }
</script>

<style lang="scss" scoped>


  *{
    list-style: none;
    padding:0;
    margin:0;
  }
  .index{
    margin-top:5.1rem;
  }
  .my-swipe {
    height: 8.8rem;
    img{
      width:100%;
    }
  }
  .footer{
    position: relative;
    margin-top: 1.344rem;
    padding-bottom: .32rem;
    p{
      font-size: .55467rem;
      color: #999;
      line-height: 1.36533rem;
      text-align: center;
    }
  }
</style>
