<template>
  <li class="store" @click="toStoreActivity">
    <div class="fir-name-pos">
      <div class="fir-l-name">{{ name }}</div>
      <div class="fir-r-pos">
        <i class="icon iconfont icon-position"></i>
        <span class="lessthan"> &lt; </span>
        <span class="distance" v-if="distance < 1000">{{ distance }}m</span>
        <span class="distance" v-else>{{ getKmNum }}km</span>
      </div>
    </div>
    <div class="sec-info">
      <div class="sec-l">
        <div class="sec-l-id">
          <span class="key">ID:</span>
          <span class="value">{{ id }}</span>
        </div>
        <div class="sec-l-create-time">
          <span class="key">创建时间:</span>
          <span class="value">{{ createTime }}</span>
        </div>
      </div>
      <div class="sec-r-more">
        <i class="icon iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="thi-contact">
      <div class="thi-l-name">
        {{ owner }}
      </div>
      <div class="thi-r-tel">
        <i class="icon iconfont icon-phone"></i>
        <span class="tel">{{ telephone }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import "../assets/stores-font/iconfont.css";
// import "../assets/tophead-font/iconfont.css";
export default {
  name: "store",
  data() {
    return {};
  },
  props: ["name", "distance", "id", "createTime", "owner", "telephone"],
  computed: {
    getKmNum() {
      return (this.distance / 1000).toFixed(2);
    }
  },
  methods: {
    toStoreActivity() {
      this.$emit("storeClick", { id: this.id, name: this.name });
    }
  }
};
</script>

<style lang="scss" scoped>
.store {
  height: px2rem(116);
  padding: px2rem(30) px2rem(20) px2rem(30) px2rem(25);
  font-size: px2rem(24);
  border-bottom: 1px solid #ccc;
  .fir-name-pos {
    padding-right: px2rem(30);
    display: flex;
    justify-content: space-between;
    .fir-l-name {
      font-size: px2rem(28);
    }
    .fir-r-pos {
      i.icon {
        font-size: px2rem(30);
      }
    }
  }
  .sec-info {
    margin-top: px2rem(28);
    color: #757575;
    display: flex;
    justify-content: space-between;
    font-size: px2rem(22);
    .sec-l {
      display: flex;
      .sec-l-create-time {
        margin-left: px2rem(45);
      }
      .value {
        margin-left: px2rem(15);
      }
    }
    .sec-r-more {
      i.icon {
        font-size: px2rem(26);
      }
    }
  }
  .thi-contact {
    display: flex;
    justify-content: space-between;
    padding-right: px2rem(30);
    margin-top: px2rem(22);
    color: #757575;
    .thi-r-tel {
      i.icon {
        font-size: px2rem(30);
        color: #000;
      }
      .tel {
        color: #10903d;
        margin-left: px2rem(20);
      }
    }
  }
}
</style>
