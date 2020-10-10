<template>
  <div class="trend-box">
    <slot name="text"></slot>
    <div class="icon" :class="[isReserve? 'down' : 'up']" v-if="type==='up'">
      <a-icon type="caret-up" />
    </div>
    <div class="icon" :class="[isReserve? 'up' : 'down']" v-if="type==='down'">
     <a-icon type="caret-down" />
    </div>
    <slot></slot>
  </div>
</template>
<script>
 export default {
   name: 'trend',
   props: {
        // 趋势类型 上升或者下降
    type: {
      type: String,
      default: 'up'
    },
    // 颜色是否反转
    isReserve: {
      type: Boolean,
      default: false
    }
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
.trend-box{
  display: flex;
  align-items: center;
}
 .icon {
   font-size: 16px;
   margin: 0 5px;
   height: 100%;
 }
 .up {
   color: #f5222d;
 }
 .down {
   color: #52c41a;
 }
</style>