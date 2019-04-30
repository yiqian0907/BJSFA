<template>
  <div class="placeOrder">
    <tophead title="下单">
      <i class="icon iconfont icon-gouwuche1" slot="r"></i>
    </tophead>
    <search placeholder="点击进行搜索~">
      <i class="icon iconfont icon-saoma" slot="right"></i>
    </search>
    <ul class="category-list">
      <li
        class="onsale"
        @click="category = 'onsale'"
        :class="{ active: category === 'onsale' }"
      >
        促销
      </li>
      <li
        class="all"
        @click="category = 'all'"
        :class="{ active: category === 'all' }"
      >
        全部
      </li>
      <li
        class="pskun"
        @click="category = 'pskun'"
        :class="{ active: category === 'pskun' }"
      >
        PSKU-N
      </li>
      <li
        class="pskuy"
        @click="category = 'pskuy'"
        :class="{ active: category === 'pskuy' }"
      >
        PSKU-Y
      </li>
      <li
        class="psku"
        @click="category = 'psku'"
        :class="{ active: category === 'psku' }"
      >
        PSKU
      </li>
    </ul>
    <div class="products-wrap">
      <div class="products-top-info-wrap">
        <div class="products-top-info">
          <div class="products-top-con">
            <div class="products-top-con-l">1670/3590</div>
            <div class="products-top-con-r">
              <span>洗护</span>
              <span class="sep">/</span>
              <span>食品</span>
              <span class="sep">/</span>
              <span>保洁</span>
            </div>
          </div>
        </div>
        <i class="icon iconfont icon-shaixuan"></i>
      </div>
      <ul class="products-list">
        <product
          v-for="item in productList"
          :key="item.code"
          :productInfo="item"
          @toProductSel="toProductSel"
        ></product>
      </ul>
    </div>
  </div>
</template>

<script>
import TopHead from "../components/TopHead";
import Search from "../components/Search";
import Service from "../service/index.js";
import Product from "../components/Product";
import "../assets/placeorder-font/iconfont.css";
export default {
  name: "placeOrder",
  data() {
    return {
      category: "onsale",
      productList: []
    };
  },
  components: {
    tophead: TopHead,
    search: Search,
    product: Product
  },
  created() {
    Service.getProductListsInfo().then(res => {
      // console.log(res.data.data);
      this.productList = res.data.data;
    });
  },
  methods: {
    toProductSel(productInfo) {
      sessionStorage.setItem("selectedPro", JSON.stringify(productInfo));
      this.$router.push("/cpxz");
    }
  }
};
</script>

<style lang="scss" scoped>
.placeOrder {
  .topHead {
    i.icon {
      font-size: px2rem(45);
    }
  }
  .search {
    i.icon {
      font-size: px2rem(60);
    }
  }
  .category-list {
    height: px2rem(60);
    line-height: px2rem(60);
    text-align: center;
    font-size: px2rem(28);
    padding: px2rem(15) 0;
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
    li {
      flex: 1 1 20%;
      border-right: 1px solid #ccc;
      &:nth-child(5) {
        border-right: none;
      }
    }
    li.active {
      color: #04afe8;
    }
  }
  .products-wrap {
    padding-left: px2rem(28);
    .products-top-info-wrap {
      height: px2rem(85);
      line-height: px2rem(85);
      padding-right: px2rem(28);
      display: flex;
      justify-content: space-between;
      i.icon {
        font-size: px2rem(35);
      }
      .products-top-info {
        width: px2rem(650);
        border-bottom: 1px solid #ccc;
        .products-top-con {
          font-size: px2rem(24);
          padding-right: px2rem(18);
          color: #757575;
          display: flex;
          justify-content: space-between;
          .products-top-con-r {
            .sep {
              margin-left: px2rem(8);
              margin-right: px2rem(8);
            }
          }
        }
      }
    }
  }
}
</style>
