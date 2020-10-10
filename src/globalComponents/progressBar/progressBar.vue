<template>
<div>



  <div class="df a-center" style="width: 100%">

    <div class="progress-container" ref="progressContainer">

      <div class="progress-content df j-end" ref="progressContent" :style="{ height: strokeWidth + 'px', background: bgColor }" v-if="isAnimate">
        <div class="textInside df a-center j-center" v-if="textInside && !noData">
          {{ percentage }}%
        </div>
      </div>

      <div v-if="!isAnimate" class="progress-content df j-end" :style="{
            width: percentage + '%',
            height: strokeWidth + 'px',
            background: bgColor,
          }">
        <div class="textInside df a-center j-center" v-if="textInside && !noData">
          {{ percentage }}%
        </div>
      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "",
  props: {
    // 进度条的值
    percentage: {
      type: Number,
      required: true,
    },
    // 是否内联显示数据
    textInside: {
      type: Boolean,
      default: false,
    },
    // 进度条高度
    strokeWidth: {
      type: [Number, String],
      default: 6,
    },
    // 默认动画时长
    duration: {
      type: Number,
      default: 2000,
    },
    // 是否有动画
    isAnimate: {
      type: Boolean,
      default: false,
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#409eff",
    },
    // 是否不显示数据
  
    // 是否自定义显示内容
 
  },
  components: {},
  data() {
    return {
      startVal: 0,
      width: 0,
    };
  },
  methods: {
    autoFn() {
      console.log(1234);
    
    },
  },
  mounted() {
      let progressContainer = this.$refs.progressContainer;
      let progressContent = this.$refs.progressContent;
      console.log(progressContent);
      if (this.isAnimate && progressContainer && progressContent) {
        this.$nextTick(() => {
          let style = window.getComputedStyle(progressContainer, null);
          let w = style.width.replace("px", "");
          let width = w * ((this.percentage * 1) / 100);
          progressContent.style.width = width.toFixed(2) + "px";
          progressContent.style.transition = ` width ${
            this.duration / 1000
          }s ease`;
        });
      }
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.df {
  display: flex;
}

.a-center {
  align-items: center;
}

.j-center {
  justify-content: center;
}

.j-end {
  justify-content: flex-end;
}

.content {
  margin-bottom: 10px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;

  .c-per {
    font-size: 26px;
  }
}

.progress-container {
  width: 100%;
  background: #ebeef5;
  border-radius: 100px;

  .progress-content {
    border-radius: 100px;
    width: 0;
  }

  .textInside {
    color: #fff;
    margin-right: 5px;
  }
}

.percentage {
  margin-left: 6px;
  font-size: 12px;
  width: 30px;
}
</style>
