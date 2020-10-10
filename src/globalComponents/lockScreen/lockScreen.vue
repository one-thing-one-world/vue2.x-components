<template>
  <div>
    <div @click="click">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lockScreen",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    click(){
      this.$emit('click')
    }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>