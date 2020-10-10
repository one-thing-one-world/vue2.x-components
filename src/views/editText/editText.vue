<template>
  <div >
    <div class="desc">可编辑文字</div>
    <div class="content">
      <editText :contents.sync="contents"> </editText>
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
      contents:"请点击修改我"
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.desc{
  margin-top: 20px;
  font-size: 30px;
}
.content{
margin-top: 20px;
}
</style>