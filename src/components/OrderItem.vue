<template>
  <li class="orderItem">
    <div class="img-box">
      <img :src="require('../assets/logo.png')" alt="" />
    </div>
    <div class="order-pro-info">
      <div class="pro-name">{{ productInfo.name }}</div>
      <div class="warehouse">
        {{ productInfo.warehouse_id }}-{{ productInfo.selectedWarehouse }}
      </div>
      <div class="pro-price">
        <span class="desc">价格:</span>
        <span class="val"
          >{{ (productInfo.price * productInfo.quantity).toFixed(2) }}元</span
        >
      </div>
    </div>
    <div class="quantity">数量: {{ productInfo.quantity }}</div>
  </li>
</template>

<script>
export default {
  name: "orderItem",
  props: ["product"],
  data() {
    return {
      productInfo: null
    };
  },
  created() {
    this.productInfo = this.product;
    console.log(this.productInfo);
  }
};
</script>

<style lang="scss" scoped>
.orderItem {
  height: px2rem(180);
  padding: px2rem(28) px2rem(28) 0;
  font-size: px2rem(24);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #757575;
  .img-box {
    width: px2rem(124);
    height: px2rem(124);
    border: 1px solid #757575;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .order-pro-info {
    margin-left: px2rem(28);
    color: #000;
    .warehouse {
      margin-top: px2rem(18);
      font-size: px2rem(22);
      color: #757575;
    }
    .pro-price {
      margin-top: px2rem(35);
      .val {
        margin-left: px2rem(16);
        font-size: px2rem(26);
        color: #ff0000;
      }
    }
  }
  .quantity {
    flex: 1 1;
    text-align: right;
    padding-top: px2rem(95);
  }
}
</style>
