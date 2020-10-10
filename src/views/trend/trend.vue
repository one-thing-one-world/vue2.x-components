<template>
  <div>
    <template>
      <h2>趋势组件</h2>
      <a-divider>正常颜色</a-divider>
      <div class="trend">
        <div class="up">
          <trend type="up">
            <template v-slot:text>营业额</template>
            5%
          </trend>
        </div>

        <div class="down">
          <trend type="down">
            <template v-slot:text>利润</template>
            5%
          </trend>
        </div>
      </div>
      <br />
      <a-divider>颜色反转</a-divider>
      <div class="trend">
        <div class="up">
          <trend type="up" :is-reserve="true">
            <template v-slot:text>营业额</template>
            5%
          </trend>
        </div>
        <div class="down">
          <trend type="down" :is-reserve="true">
            <template v-slot:text>利润</template>
            5%
          </trend>
        </div>
      </div>
    </template>
  </div>
</template>
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
.trend {
  display: flex;
}
.down {
  margin-left: 30px;
}
</style>