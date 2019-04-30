<template>
  <li class="product" @click="clickProduct">
    <div class="product-img">
      <img :src="require('../assets/logo.png')" alt="产品图片" />
    </div>
    <div class="product-info">
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
      <div class="price-inventory-wrap">
        <div class="price-inventory">
          <div class="price">
            <span class="desc">价格:</span>
            <span class="val">{{ formattedPrice }}</span>
          </div>
          <div class="inventory">
            <span class="desc">库存:</span>
            <span class="val">{{ productInfo.inventory }}箱</span>
          </div>
        </div>
        <i class="icon iconfont icon-shuaxin"></i>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "product",
  props: ["productInfo"],
  data() {
    return {};
  },
  computed: {
    formattedPrice() {
      return this.productInfo.price.toFixed(2);
    }
  },
  methods: {
    clickProduct() {
      this.$emit("toProductSel", this.productInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  padding: px2rem(20) 0;
  padding-right: px2rem(28);
  border-bottom: 1px solid #ccc;
  .product-img {
    width: px2rem(122);
    height: px2rem(122);
    border: 1px solid #ccc;
    float: left;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .product-info {
    font-size: px2rem(22);
    margin-left: px2rem(152);
    color: #757575;
    .name {
      font-size: px2rem(26);
      color: #000;
    }
    .val {
      margin-left: px2rem(10);
    }
    .code-size {
      margin-top: px2rem(12);
      .code {
        float: left;
      }
      .size {
        margin-left: px2rem(52);
      }
    }
    .price-inventory-wrap {
      display: flex;
      justify-content: space-between;
      margin-top: px2rem(40);
      .price-inventory {
        flex: 1 1;
        line-height: px2rem(40);
        display: flex;
        justify-content: space-between;
        .price {
          float: left;
          .val {
            color: #ff0000;
            font-size: px2rem(24);
            font-weight: bold;
          }
        }
        .inventory {
          .val {
            margin-right: px2rem(20);
          }
        }
      }
      i.icon {
        font-size: px2rem(40);
        color: #000;
      }
    }
  }
}
</style>
