<template>
  <div class="activity">
    <tophead title="店内活动">
      <p slot="r" class="exit">结束拜访</p>
    </tophead>
    <div class="store-name">{{ performanceData.name }}</div>
    <div class="performance-wrap">
      <div class="sales-wrap">
        <div class="desc-wrap">
          <i class="icon iconfont icon-xiaoliangzuigao"></i>
          <span class="desc-text">本月至今销量</span>
        </div>
        <div class="sales-val">{{ performanceData.monthSales }}</div>
      </div>
      <div class="sales-wrap">
        <div class="desc-wrap">
          <i class="icon iconfont icon-xiaoliangpaixu"></i>
          <span class="desc-text">过往半年月均销量</span>
        </div>
        <div class="sales-val">{{ performanceData.halfYearSales }}</div>
      </div>
      <div class="complete-percent-wrap">
        <div class="complete-percent">
          <div class="desc-wrap">
            <i class="icon iconfont icon-24gl-percent"></i>
            <span class="desc-text">核心分销完成率</span>
          </div>
          <div class="percent-val">{{ performanceData.completePercent }}%</div>
        </div>
        <div class="percent-chart">
          <span
            class="color-cover"
            :style="{
              background: `linear-gradient(to right, #1c58fd, #22bf65)`,
              width: this.performanceData.completePercent + '%'
            }"
          ></span>
        </div>
      </div>
    </div>
    <div class="notes-wrap">
      <div class="title">历史拜访备注:</div>
      <div class="notes-input-field">
        <textarea placeholder="点击填写拜访备注~"></textarea>
      </div>
    </div>
    <div class="button-wrap">
      <div class="button order-btn" @click="$router.push('/xd')">下单</div>
      <div class="button signin-btn">商店签到</div>
    </div>
  </div>
</template>

<script>
import TopHead from "../components/TopHead.vue";
import Service from "../service/index.js";
import "../assets/activity-font/iconfont.css";
export default {
  name: "activity",
  data() {
    return {
      performanceData: {}
    };
  },
  components: {
    tophead: TopHead
  },
  created() {
    Service.getStorePerformance(this.$route.params.id).then(res => {
      this.performanceData = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.activity {
  .topHead {
    .tp-r {
      .exit {
        font-size: px2rem(26);
      }
    }
  }
  height: 100%;
  font-size: px2rem(28);
  position: relative;
  .store-name {
    height: px2rem(84);
    line-height: px2rem(84);
    background-color: #fafafa;
    padding-left: px2rem(25);
    color: #000;
    border-bottom: 1px solid #ccc;
  }
  .performance-wrap {
    .sales-wrap {
      height: px2rem(110);
      line-height: px2rem(110);
      border-bottom: 1px solid #ccc;
      padding: 0 px2rem(28);
      display: flex;
      justify-content: space-between;
      .desc-wrap {
        i.icon {
          font-size: px2rem(28);
        }
        .desc-text {
          margin-left: px2rem(25);
        }
      }
    }
    .complete-percent-wrap {
      height: px2rem(140);
      border-bottom: 1px solid #ccc;
      padding: 0 px2rem(28);
      .complete-percent {
        display: flex;
        justify-content: space-between;
        line-height: px2rem(96);
        .desc-wrap {
          i.icon {
            font-size: px2rem(28);
          }
          .desc-text {
            margin-left: px2rem(25);
          }
        }
      }
      .percent-chart {
        background-color: #e4e4e4;
        border-radius: px2rem(6);
        height: px2rem(12);
        position: relative;
        .color-cover {
          height: 100%;
          position: absolute;
          border-radius: px2rem(6);
        }
      }
    }
  }
  .notes-wrap {
    .title {
      height: px2rem(66);
      line-height: px2rem(66);
      background-color: #fafafa;
      padding-left: px2rem(28);
    }
    .notes-input-field {
      textarea {
        width: 100%;
        height: px2rem(200);
        border: 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        outline: none;
        font-size: px2rem(28);
        padding-left: px2rem(28);
        padding-top: px2rem(18);
      }
    }
  }
  .button-wrap {
    // width: 100%;
    margin-top: px2rem(170);
    // position: absolute;
    // bottom: px2rem(77);
    .button {
      width: px2rem(480);
      height: px2rem(84);
      line-height: px2rem(84);
      font-size: px2rem(36);
      text-align: center;
      margin: 0 auto;
      border: 2px solid #10903d;
      border-radius: px2rem(4);
    }
    .order-btn {
      color: #10903d;
    }
    .signin-btn {
      margin-top: px2rem(52);
      background-color: #10903d;
      color: #fff;
    }
  }
}
</style>
