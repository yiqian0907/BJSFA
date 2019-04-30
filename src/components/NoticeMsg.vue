<template>
  <li class="noticeMsg">
    <span class="circle" :class="{ severeMsg: parseInt(level) }"></span>
    <div class="msgInfo">
      <p class="title">{{ title }}</p>
      <p class="date">{{ date }}</p>
    </div>
    <i class="icon iconfont icon-youjiantou"></i>
  </li>
</template>

<script>
import "../assets/tophead-font/iconfont.css";
export default {
  name: "noticeMsg",
  props: ["title", "date", "level"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.noticeMsg {
  height: px2rem(124);
  // line-height: px2rem(124);
  border-bottom: 1px solid #ccc;
  padding-right: px2rem(20);
  position: relative;
  .circle {
    display: inline-block;
    width: px2rem(12);
    height: px2rem(12);
    background-color: #c6c6c6;
    border-radius: 50%;
    position: absolute;
    top: px2rem(40);
    left: px2rem(40);
  }
  .circle.severeMsg {
    background-color: #ff0000;
  }
  .msgInfo {
    display: inline-block;
    margin-left: px2rem(82);
    margin-top: px2rem(32);
    .title {
      font-size: px2rem(28);
    }
    .date {
      font-size: px2rem(22);
      margin-top: px2rem(15);
      color: #757575;
    }
  }
  i.icon {
    float: right;
    font-size: px2rem(24);
    margin-top: px2rem(50);
  }
}
</style>
