<template>
  <div class="container">
    <iframe class="iframe" :src="src"></iframe>
  </div>
</template>

<script>
export default {
  name: "iframeView",
  props: {
    // 网址路径
    src: {
      type: String,
      required: true,
    },
  },
  components: {},
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
.container {
  width: 100%;
  height: 100%;
}
.iframe {
  width: 100%;
  height: 100%;
}
</style>