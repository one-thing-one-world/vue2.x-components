<template>
  <div>
    <div>
      <div
        @mouseenter="enterItem(item, index)"
        @mouseleave="leaveItem(item, index)"
        :class="{
          defaultbg: $route.path === item.path || num === index,
          moveStyle: numFlag !== index,
        }"
        class="list-loop"
        v-for="(item, index) in iconList"
        :key="index"
      >
        <div @click="goToSomePage(item, index)" class="list-loop-box">
          <div class="icons"><a-icon :type="item.icon" /></div>
          <div class="text">{{ item.name }}</div>
        </div>
        <div class="line"></div>
      </div>
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
      numFlag: -1,
      num: -1,
      msg: "xxx",
      iconList: [
        {
          name: "首页",
          icon: "sketch",
          path: "/",
        },

        {
          name: "图片预览",
          icon: "sketch",
          path: "/picPreview",
        },
        {
          name: "趋势",
          icon: "sketch",
          path: "/trend",
        },
        {
          name: "底部工具栏",
          icon: "sketch",
          path: "/bottomToolBar",
        },
        {
          name: "通知图标",
          icon: "sketch",
          path: "/informIcon",
        },
        {
          name: "内嵌网页",
          icon: "sketch",
          path: "/inLineWebPages",
        },
        {
          name: "验证码按钮",
          icon: "sketch",
          path: "/varifycationCode",
        },
        {
          name: "进度条拓展",
          icon: "sketch",
          path: "/progressBar",
        },
        {
          name: "生成二维码",
          icon: "sketch",
          path: "/generateQRcode",
        },
        {
          name: "复制文本",
          icon: "sketch",
          path: "/copyText",
        },
        {
          name: "生成水印",
          icon: "sketch",
          path: "/createWater",
        },
        {
          name: "可编辑文字",
          icon: "sketch",
          path: "/editText",
        },
      ],
    };
  },
  methods: {
    goToSomePage(item, index) {
      console.log(555);
      if (this.$route.path !== item.path) {
        this.num = index;
        console.log(this.num, index);
        this.$router.push({
          path: item.path,
        });
      }
    },

    enterItem(item, index) {
      this.numFlag = index;
      console.log(666);
    },
    leaveItem(item, index) {
      this.numFlag = -1;
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.list-loop-box {
  display: flex;
  padding: 8px 0;
}
.list-loop:hover {
  cursor: pointer;
}

.icons {
  margin-left: 20px;
}
.text {
  margin-left: 10px;
}

.line {
  width: 100%;
  height: 1px;
}
.moveStyle {
  background: white;

  color: skyblue;
}
.defaultbg {
  color: black;
  background: skyblue;
  cursor: pointer;
}
</style>