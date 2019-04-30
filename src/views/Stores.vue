<template>
  <div class="stores">
    <tophead title="进店拜访">
      <div slot="r"></div>
    </tophead>
    <div class="plan-wrap">
      <div
        class="within-plan"
        :class="{ active: planned }"
        @click="planned = true"
      >
        计划内
      </div>
      <div
        class="unplanned"
        :class="{ active: !planned }"
        @click="planned = false"
      >
        计划外
      </div>
    </div>
    <search placeholder="点击进行搜索~"></search>
    <ul class="store-list">
      <store-item
        v-for="item in storesInfo"
        :key="item.id"
        :name="item.name"
        :distance="item.distance"
        :id="item.id"
        :createTime="item.createTime"
        :owner="item.owner"
        :telephone="item.telephone"
        @storeClick="storeClick"
      ></store-item>
    </ul>
  </div>
</template>

<script>
import TopHead from "../components/TopHead";
import "../assets/stores-font/iconfont.css";
import StoreItem from "../components/StoreItem";
import Search from "../components/Search";
import Service from "../service/index.js";
export default {
  name: "stores",
  data() {
    return {
      planned: true,
      storesInfo: []
    };
  },
  components: {
    tophead: TopHead,
    storeItem: StoreItem,
    search: Search
  },
  created() {
    Service.getStoresInfo().then(res => {
      this.storesInfo = res.data.data;
    });
  },
  methods: {
    storeClick(id) {
      //   console.log(id);
      this.$router.push(`/dnhd/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.stores {
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  .plan-wrap {
    display: flex;
    height: px2rem(108);
    line-height: px2rem(108);
    text-align: center;
    font-size: px2rem(28);
    color: #000;
    .within-plan {
      flex: 1 1 50%;
    }
    .unplanned {
      flex: 1 1 50%;
    }
    .active {
      box-sizing: border-box;
      background-color: #fafafa;
      border-bottom: 6px solid #10903d;
    }
  }
  .store-list {
    flex: 1 1;
  }
}
</style>
