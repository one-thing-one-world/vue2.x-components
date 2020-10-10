<template>
  <div>
    <div class="box">
      <div class="pictur-box">
        <div
          :style="{ width: originWidth + 'px', height: originHeight + 'px' }"
          v-for="(item, index) in urls"
          :key="index"
        >
          <img @click="picPreviewClick(item, index)" :src="item" />
        </div>
      </div>
    </div>

    <div>
      <div v-if="picFlag" @click="picPreviewClothClick" class="picturView-box">
        <div v-if="isMark" @click="picPreviewClothBtnClick" class="cloth-btn"><a-icon type="close-circle" /></div>
        <div class="urls-loop">
          <div class="pic-box">
            <div
              class="pic-item"
              :style="{
                width: originWidth + 'px',
                height: originHeight + 'px',
              }"
              ref="img"
            >
              <img :src="urls[clickIndex]" />
            </div>

            <div v-if="picFlag" class="icon-box" @click="clickEmpty">
              <div class="icon-item-box">
                <div @click="zoomInClick" class="icon-item">
                  <a-icon type="zoom-in" />
                </div>
                <div @click="zoomOutClick" class="icon-item">
                  <a-icon type="zoom-out" />
                </div>
                <div @click="clockwiseClick" class="icon-item">
                  <a-icon type="redo" />
                </div>
                <div @click="counterClockClick" class="icon-item">
                  <a-icon type="undo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="picFlag" class="arrow-box">
        <div @click="backPic" class="arrow-left">
         <a-icon type="left-circle" />
        </div>
        <div @click="nextPic" class="arrow-right">
         <a-icon type="right-circle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "picturePreview",
  props: {
    isMark:{
      type:Boolean,
      default:true,
    },
    urls: {
      type: Array,
      required:true,
    },
    pictureWidth: {
      type: Number,
    },
    pictureHeight: {
      type: Number,
    },
  },
  components: {},
  data() {
    return {
      msg: "xxx",
      picFlag: false,
      clickIndex: 0,
      originWidth: "",
      originHeight: "",
      num: 1,
      degre: 0,
    };
  },
  methods: {
    // this.originWidth = props.pictureWidth
    // this.originHeight = props.pictureHeight
    // let img = ref()

    picPreviewClick(item, index) {
      this.picFlag = true;
      this.clickIndex = index;
    },
    picPreviewClothClick() {
      if(!this.isMark){
          this.picFlag = false;
      }
      
    },
    picPreviewClothBtnClick(){

         this.picFlag = false;
      
    },

    zoomInClick(e) {
      e.stopPropagation();
      this.num = this.num * 1.1;
      //比较屏幕高度和当前浏览器的的大小
      // if (
      //   window.innerHeight -
      //   Number(
      //     img.value.style.height.slice(0, img.value.style.height.length - 2)
      //   )* num >=
      //   0
      // ) {
      //   img.value.style.transform = `scale(${num})`;
      // }
      this.$refs.img.style.transform = `scale(${this.num})`;
   
    },
    zoomOutClick(e) {
      e.stopPropagation();
      if (this.num / 1.1 > 1) {
        this.num = this.num / 1.1;
        this.$refs.img.style.transform = `scale(${this.num})`;
        
      }
    },

    clockwiseClick(e) {
      this.degre = this.degre + 90;
      e.stopPropagation();
     
      this.$refs.img.style.transform = `rotate(${this.degre}deg)`;
    },
    counterClockClick(e) {
      this.degre = this.degre - 90;
      e.stopPropagation();
      
      this.$refs.img.style.transform = `rotate(${this.degre}deg)`;
    },
    clickEmpty(e) {
      e.stopPropagation();
    },
    nextPic() {
      this.$refs.img.style.transform = " scale(1)";
      if (this.clickIndex < this.urls.length - 1) {
        this.clickIndex = this.clickIndex + 1;
      } else {
        this.clickIndex = 0;
      }
    },
    backPic() {
      this.$refs.img.style.transform = " scale(1)";
      if (this.clickIndex !== 0) {
        this.clickIndex = this.clickIndex - 1;
      } else {
        this.clickIndex = this.urls.length - 1;
      }
    },
  },
  mounted() {
    this.originWidth = this.pictureWidth;
    this.originHeight = this.pictureHeight;
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.cloth-btn {
  position: absolute;
  top: 10%;
  right: 10%;
  width: 40px;
  height: 40px;
  border-radius: 50% 50%;
  background: rgba($color: #858282, $alpha: 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: white;

}
.cloth-btn:hover{
  cursor: pointer;
  background: rgb(173, 171, 171);
}
.pictur-box {
  display: flex;
}

.r1 {
  border: 1px solid red;
}

.arrow-box {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 46px;
  color: white;

  .arrow-left {
    margin-left: 5%;
    padding: 4px;
  }

  .arrow-right {
    margin-right: 5%;
    padding: 4px;
  }

  .arrow-left:hover {
    cursor: pointer;
  }

  @keyframes arrowBgColor {
    0% {
      background: rgb(210, 212, 212);
    }

    100% {
      background: gray;
    }
  }

  .arrow-right:hover {
    box-shadow: 0 0 4px gray;

    cursor: pointer;
    animation: arrowBgColor linear 2s infinite alternate;
  }

  .arrow-left:hover {
    box-shadow: 0 0 4px gray;
    animation: arrowBgColor linear 2s infinite alternate;
  }
}

.pictur-box {
  display: flex;
}

.box {
  margin-top: 20px;
  margin-left: 20px;
}

.picturView-box {
  width: 100vw;
  height: 100vh;
  background: rgba($color: #78797a, $alpha: 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic-text {
  height: 40px;
  line-height: 40px;
  font-size: 26px;
}

.pic-desc {
  margin-top: 32px;
  margin-bottom: 10px;
  font-size: 20px;
}

.icon-box {
  position: absolute;
  bottom: 40px;
  left: 50%;
  right: 0;
  margin-left: -150px;
  width: 300px;
  z-index: 999;
  background: rgba($color: #78797a, $alpha: 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px 30px;

  .icon-item-box {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-item {
      font-size: 28px;
      color: white;
      margin: 0 14px;
    }
  }
}

@keyframes zoomIcon {
  0% {
    transform: scale(1);
    color: rgb(233, 229, 229);
  }

  100% {
    transform: scale(1.3);
    color: white;
  }
}

.icon-item:hover {
  animation: zoomIcon linear 0.9s infinite alternate;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
}
</style>
