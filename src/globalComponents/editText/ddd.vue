<template>
  <div>
    <div
      class="box"
      ref="progressContainer"
      
    >
      <div v-if="isAnimate" ref="progressContent" class="content-box" :style="{ height: strokeHeight + 'px', background: bgColor }">
        <div v-if="textInside" class="textInside">{{ percentage }}%</div>
        <div v-else></div>
      </div>

      <div v-else ref="progressContent" class="content-box" :style="{ height: strokeHeight + 'px', background: bgColor }">
        <div v-if="textInside" class="textInside">{{ percentage }}%</div>
        <div v-else></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ddd",
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    strokeHeight: {
      type: Number,
      default: 6,
    },
    bgColor: {
      type: String,
      default: "#409eff",
    },
    textInside: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 5000,
    },
    isAnimate: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let progressContainer = this.$refs.progressContainer;
    let progressContent = this.$refs.progressContent;

    this.$nextTick(() => {
      let style = window.getComputedStyle(progressContainer, null);
      let w = style.width.replace("px", "");
      let width = w * ((this.percentage * 1) / 100);
      progressContent.style.width = width.toFixed(2) + "px";
     if(this.isAnimate){
        progressContent.style.transition = ` width ${this.duration / 1000}s ease`;
     }
    });
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.box {
  border-radius: 100px;
  width: 100%;
   background: #ebeef5;
}
.content-box {
  display: flex;
  justify-content: flex-end;

  align-items: center;
  height: 100%;
  border-radius: 100px;
  width: 0;
 

  .textInside {
     color: #fff;
    margin-right: 5px;
  }
}
</style>
