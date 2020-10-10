<template>
  <div>
    <h2>底部工具栏</h2>
    <bottomToolBar>
      <template v-slot:left> 这是一段内容 </template>
      <template v-slot:right>
        <a-button class="cancel">取消</a-button>
        <a-button type="primary">确定</a-button>
      </template>
    </bottomToolBar>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.cancel{
  margin-right: 20px;
}
</style>