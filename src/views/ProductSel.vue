<template>
  <div class="productSel">
    <tophead title="产品选择"></tophead>
    <div class="product-info">
      <div class="product-info-l">
        <img :src="require('../assets/logo.png')" alt="产品图片" />
      </div>
      <div class="product-info-r">
        <div class="name">{{ productInfo.name }}</div>
        <div class="code-size">
          <div class="code">
            <span class="desc">编码:</span>
            <span class="val">{{ productInfo.code }}</span>
          </div>
          <div class="size">
            <span class="desc size">规格:</span>
            <span class="val">{{ productInfo.size }}盒/箱</span>
          </div>
        </div>
        <div class="price-wrap">
          <span class="desc">价格:</span>
          <span class="val">{{ formattedPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from "../components/TopHead";
export default {
  name: "productSel",
  data() {
    return {
      productInfo: {}
    };
  },
  created() {
    this.productInfo = JSON.parse(sessionStorage.getItem("selectedPro"));
  },
  components: {
    tophead: TopHead
  },
  computed: {
    formattedPrice() {
      return this.productInfo.price.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.productSel {
  .product-info {
    padding: px2rem(28);
    border-bottom: 1px solid #ccc;
    .product-info-l {
      width: px2rem(124);
      height: px2rem(124);
      border: 1px solid #ccc;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .product-info-r {
      font-size: px2rem(24);
      margin-left: px2rem(156);
      color: #757575;
      .val {
        margin-left: px2rem(10);
      }
      .name {
        font-size: px2rem(26);
        color: #000;
      }
      .code-size {
        margin-top: px2rem(17);
        .code {
          float: left;
        }
        .size {
          margin-left: px2rem(50);
        }
      }
      .price-wrap {
        margin-top: px2rem(40);
        .val {
          color: #ff0000;
          font-size: px2rem(26);
        }
      }
    }
  }
}
</style>
