<template>
  <div class="search">
    <div class="search-l">
      <i class="icon iconfont icon-sousuo"></i>
      <input type="search" :placeholder="placeholder" />
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
import "../assets/stores-font/iconfont.css";
export default {
  name: "search",
  props: ["placeholder"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: px2rem(83);
  //   line-height: px2rem(103);
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #fafafa;
  padding-top: px2rem(20);
  padding-left: px2rem(27);
  padding-right: px2rem(27);
  display: flex;
  justify-content: space-between;
  .search-l {
    i.icon {
      font-size: px2rem(30);
      &::before {
        color: #000;
      }
    }
    input {
      width: px2rem(500);
      border: 0 none;
      outline: 0 none;
      font-size: px2rem(24);
      background-color: #fafafa;
      padding-left: 1em;
      color: #757575;
    }
  }
}
</style>
