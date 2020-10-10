<template>
  <div class="box">
    <div v-if="flag" @click="toggole">{{ contents }}</div>

    <div class="input-box" v-if="!flag">
      <div>
        <input ref="inpRef" @blur="handBlur" v-model="value" placeholder="请输入" />
      </div>

      <div class="btn-box">
        <div @click="ensure" class="btn">
          <a-button type="primary"> 确定 </a-button>
        </div>
        <div @click="cancell" class="btn">
          <a-button > 取消 </a-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  props: {
    contents: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      flag: true,
      value: "",
    };
  },
  methods: {
   
    handBlur() {
      this.$emit("update:contents", this.value);
      this.flag = true;
      console.log(9090);
    },
    toggole() {
      this.flag = false;
      this.$nextTick(() => {
        this.$refs.inpRef.focus();
         this.$refs.inpRef.style.border = '1px solid skyblue'
      });
    },
    ensure() {
      console.log(this.contents);

      this.$emit("update:contents", this.value);
      console.log(this.contents);
      this.flag = true;
      console.log(88888);
    },
    cancell() {
      this.flag = false;
    },
  },
  mounted() {
    this.value = this.contents;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box{

}
input{
  border: none;
  outline: none;
}
.btn-box {
  display: flex;
}
.btn {
  margin-left: 20px;
}
.input-box {
  display: flex;
  align-items: center;
}
</style>