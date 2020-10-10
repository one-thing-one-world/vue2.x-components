<template>
  <div class="c-p">

    <a-popconfirm  v-if="$slots.content" @confirm='confirm' :placement="placement" ok-text="确定" cancel-text="取消" >
        <template slot="title">
          <slot name="content"></slot>
        </template>
         <a-badge :count="count">
        <div class="icon"><a-icon type="bell" /></div>
      </a-badge>
      </a-popconfirm>



    <template v-if="!$slots.content">
      <a-badge :count="count">
        <div class="icon"><a-icon type="bell" /></div>
      </a-badge>
    </template>

  
  </div>
</template>

<script>
export default {
  name: "informIcon",
  props: {
    // 显示数量
    count: {
      type: [Number, String],
      default: 0,
    },
    // 菜单方向
    placement: {
      type: String,
      default: "top",
    },
  },
  components: {},
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    confirm() {
      this.$emit('confirm')
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