<template>
  <div>
    <h2>通知图标</h2>
    <br />
    <h3>普通通知</h3>
    <informIcon :count="5" class="mr-2"></informIcon>
    <br />
    <h3>消息超过99</h3>
    <informIcon :count="190" class="mr-2"></informIcon>
    <br />
    <h3>默认弹出菜单</h3>
    <informIcon @confirm="confirm" :count="102" >
      <template v-slot:content> 默认正上方弹出菜单 </template>
    </informIcon>
    <br />
    <h3>控制菜单方向</h3>
    <informIcon :count="10" placement="bottom">
      <template v-slot:content> 可以控制菜单的方向 </template>
    </informIcon>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    confirm(){
      console.log(4444);
    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.icon {
  font-size: 22px;
}
.c-p {
  cursor: pointer;
}
</style>