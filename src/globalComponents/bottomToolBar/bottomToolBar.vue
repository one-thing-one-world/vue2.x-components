<template>
  <div class="toolbar">
    <div>
      <template> <slot name="left" /></template>
    </div>
    <div>
      <template>
        <slot name="right" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomToolBar",
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
.toolbar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 66px;
  padding: 0 24px;
  line-height: 56px;
  background: #fff;
  border-top: 1px solid #e8eaec;
  -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>