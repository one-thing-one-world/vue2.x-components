<template>

    <div class="container">
      <div class="item">
        <h2>普通进度条</h2>
        <progressBar :percentage="35.5" ></progressBar>
      </div>
      <div class="item">
        <h2>普通进度条控制高度</h2>
        <progressBar :percentage="62.3" :stroke-width="32"></progressBar>
      </div>
      <div class="item">
        <h2>文字内显</h2>
        <progressBar :percentage="70" :text-inside="true" :stroke-width="24"></progressBar>
      </div>
      <div class="item">
        <h2>文字内显且控制高度</h2>
        <progressBar :percentage="33.8" :text-inside="true" :stroke-width="32"></progressBar>
      </div>
      <div class="item">
        <h2>自定义颜色</h2>
        <progressBar :percentage="66" bg-color="#f46"></progressBar>
      </div>
      <div class="item">
        <h2>不显示进度</h2>
        <progressBar :percentage="66" bg-color="#f46" :noData="true"></progressBar>
      </div>
      <div class="item">
        <h2>自定义显示内容</h2>
        <progressBar :percentage="66" bg-color="#f46" :line-data="true">
          <template v-slot:content>转化率(日同比 66% )</template>
        </progressBar>
      </div>
      <div class="item">
        <h2>进度条加载动画</h2>
        <progressBar :percentage="50" bg-color="#f46" :is-animate="true" ></progressBar>
      </div>
      <div class="item">
        <h2>设置加载动画时间</h2>
        <progressBar :percentage="50" bg-color="#f46" :is-animate="true" :duration="5000"></progressBar>
      </div>
     
    </div>

</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.container {

  height: 1000px;
  width: 600px;
  height: 100% !important;
  h2 {
    margin-bottom: 10px;
  }
  .item {
    
   
    margin: 20px 0;
  }
}
</style>