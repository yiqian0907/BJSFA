<template>
  <div class="pie">
    <div class="chart" ref="pie"></div>
    <div class="val">
      {{ this.val }}
    </div>
    <span v-if="isPercent" class="percent">%</span>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
// 引入 echarts 主模块。
import * as echarts from "echarts/lib/echarts";
// 引入折线图。
import "echarts/lib/chart/pie";
// 引入提示框组件、标题组件、工具箱组件。
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";
export default {
  name: "pie",
  props: ["title", "val", "isPercent"],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    echarts.init(this.$refs.pie).setOption({
      series: {
        type: "pie",
        radius: ["90%", "100%"],
        labelLine: false,
        data: [
          {
            name: "",
            value: this.isPercent ? this.val : 0,
            itemStyle: { color: "#28d264" }
          },
          {
            name: "",
            value: this.isPercent ? 100 - this.val : 100,
            itemStyle: { color: "#dfdfdf" }
          }
        ]
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.pie {
  position: relative;
  .chart {
    width: px2rem(176);
    height: px2rem(176);
  }
  .val {
    position: absolute;
    top: px2rem(60);
    left: px2rem(45);
    font-size: px2rem(48);
  }
  .percent {
    font-size: px2rem(24);
    position: absolute;
    left: px2rem(120);
    top: px2rem(60);
  }
  .title {
    text-align: center;
    padding-top: px2rem(30);
    font-size: px2rem(24);
  }
}
</style>
