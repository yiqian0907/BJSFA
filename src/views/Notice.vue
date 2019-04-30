<template>
  <div class="notice">
    <tophead title="公司通告">
      <div slot="r"></div>
    </tophead>
    <div class="notices-wrap">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <ul class="notice-list">
          <notive-msg
            v-for="item in noticeMsgs"
            :key="item.id"
            :title="item.title"
            :date="item.subDate"
            :level="item.level"
          >
          </notive-msg>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import TopHead from "../components/TopHead";
import Service from "../service/index.js";
import NoticeMsg from "../components/NoticeMsg";
export default {
  name: "notice",
  data() {
    return {
      noticeMsgs: null,
      allLoaded: false
    };
  },
  components: {
    tophead: TopHead,
    "notive-msg": NoticeMsg
  },
  created() {
    Service.getNotices().then(res => {
      this.noticeMsgs = res.data.data;
    });
  },
  methods: {
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    }
    // loadBottom() {
    //   this.allLoaded = true;
    //   this.$refs.loadmore.onBottomLoaded();
    // }
  }
};
</script>

<style lang="scss" scoped>
.notice {
  // height: 100%;
  display: flex;
  flex-direction: column;
  // align-content: stretch;
  .notices-wrap {
    flex: 1 1;
    .notice-list {
      height: 100%;
    }
    .mint-loadmore-top {
      .mint-loadmore-text {
        font-size: px2rem(24);
      }
    }
  }
}
</style>
