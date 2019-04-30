<template>
  <div class="home">
    <tophead title="SFA">
      <router-link class="icon iconfont icon-user" to="/user" slot="r">
        <!-- <i class="icon iconfont icon-user"></i> -->
      </router-link>
    </tophead>
    <div class="pie-chart-wrap">
      <div class="cur-date">{{ getCurDate }}</div>
      <div class="pie-chart">
        <pie title="月时间进度" :val="getMonthPercent" :isPercent="true"></pie>
        <pie title="月销售完成度" :val="30" :isPercent="true"></pie>
        <pie title="有效商店数" :val="289" :isPercent="false"></pie>
      </div>
    </div>
    <div class="menu-wrap">
      <template></template>
      <menu-cell
        class="menu-cell"
        v-for="i in 9"
        :key="i"
        :url="menuCellData[i - 1] ? menuCellData[i - 1].url : ''"
        :imgURL="menuCellData[i - 1] ? menuCellData[i - 1].imgURL : ''"
        :title="menuCellData[i - 1] ? menuCellData[i - 1].title : ''"
      ></menu-cell>
    </div>
  </div>
</template>

<script>
const menuCellData = [
  {
    url: "/gstg",
    imgURL: require("../assets/img/gstg.png"),
    title: "公司通告"
  },
  {
    url: "/jdbf",
    imgURL: require("../assets/img/jdbf.png"),
    title: "进店拜访"
  },
  {
    url: "/gstg",
    imgURL: require("../assets/img/gstg.png"),
    title: "公司通告"
  },
  {
    url: "/gstg",
    imgURL: require("../assets/img/gstg.png"),
    title: "公司通告"
  },
  {
    url: "/gstg",
    imgURL: require("../assets/img/gstg.png"),
    title: "公司通告"
  },
  {
    url: "/gstg",
    imgURL: require("../assets/img/gstg.png"),
    title: "公司通告"
  },
  {
    url: "/gstg",
    imgURL: require("../assets/img/gstg.png"),
    title: "公司通告"
  },
  { url: "/gstg", imgURL: require("../assets/img/gstg.png"), title: "公司通告" }
];
// @ is an alias to /src
import TopHead from "../components/TopHead";
import Pie from "../components/Pie";
import MenuCell from "../components/MenuCell";
export default {
  name: "home",
  data() {
    return {
      menuCellData
    };
  },
  components: {
    tophead: TopHead,
    pie: Pie,
    "menu-cell": MenuCell
  },
  computed: {
    getCurDate() {
      let date = new Date(Date.now());
      return `${date.getFullYear()}年${date.getMonth() + 1}月`;
    },
    getMonthPercent() {
      let date = new Date(Date.now());
      return parseInt((date.getDate() / 30) * 100);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: stretch;
  align-content: stretch;
  .icon {
    color: #fff;
  }
  .pie-chart-wrap {
    width: 100%;
    height: px2rem(370);
    color: #000;
    .cur-date {
      font-size: px2rem(28);
      text-align: center;
      padding: 40px 0 25px;
      letter-spacing: px2rem(3);
    }
    .pie-chart {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
  .menu-wrap {
    flex: 1 1;
    display: flex;
    flex-flow: row wrap;
    padding: 0 px2rem(28);
    border-top: 1px solid #ccc;
    .menucell {
      flex: 1 1 30%;
    }
    .menucell:nth-child(3n) {
      border-right: none;
    }
  }
}
</style>
