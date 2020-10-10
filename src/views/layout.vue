<template>
  <div class="box">
    <div class="left">
      <asideNav></asideNav>
    </div>

    <div class="content">
      <div class="content-box">
        <div class="content-router-box"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<script>
import asideNav from "@/components/layout/asideNav.vue";
export default {
  name: "",
  props: {},
  components: { asideNav },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  height: 100% !important;
}
.left {
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
}
.content {
  width: calc(100% - 150px);
  height: 100% !important;
  background: rgb(246, 245, 245);
  padding: 20px;
  margin-left: 150px;
 
}
.r1 {
  border: 1px solid red;
}
.content-box {
  height: 100% !important;
  padding: 10px;
  background: white;
   min-height: 600px;
}
.content-router-box{
   height: 100% !important;
  
}
</style>