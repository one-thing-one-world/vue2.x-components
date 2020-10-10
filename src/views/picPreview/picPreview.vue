<template>
  <div>
    <picturePreview :urls="urls" :isFlag='isFlag' :pictureWidth="pictureWidth" :pictureHeight="pictureHeight"></picturePreview>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      urls: [require("../../assets/logo.png"),
      require("../../assets/ba.jpg"),
      
      ],
      pictureWidth: 200,
      pictureHeight: 200,
      isFlag:true,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>