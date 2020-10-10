<template>
  <div class="container">
    <div class="btn-box">
      <a-button class="open" type="primary" @click="flag = true"
        >打开内嵌网页</a-button
      >
      <a-button class="cloth" type="primary" @click="flag = false"
        >关闭内嵌网页</a-button
      >
    </div>
    <div class="inner-box">
      <iframe-view :src="src" v-if="flag"></iframe-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      flag: false,
      src: "https://www.baidu.com",
    };
  },
  methods: {
    open() {},
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.btn-box {
  display: flex;

  align-items: center;
  margin-bottom: 20px;
}

.open {
  margin-left: 20px;
}
.cloth {
  margin-left: 20px;
}
.inner-box {
  width: 100%;
  height: calc(100vh - 120px);
}
.container {
  width: 100%;
  height: 100%;
}
</style>