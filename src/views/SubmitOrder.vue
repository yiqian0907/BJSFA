<template>
  <div class="submitOrder">
    <div class="scroll-view">
      <tophead title="提交订单"></tophead>
      <div class="contact-info-wrap">
        <div class="receiver">
          <span>收货人: 辛宏旭</span>
          <span class="phone">13161822231</span>
        </div>
        <div class="delivery-address">
          头像北京北京市海淀区西三旗黑泉路8号
          三旗黑泉路8号保盛广场c座南保领地啥养公司
        </div>
      </div>
      <div
        class="order-detail-wrap"
        v-for="(item, warehouseIndex) in orderList"
        :key="warehouseIndex"
      >
        <ul class="product-list">
          <order-item
            v-for="(product, productIndex) in item"
            :key="productIndex"
            :product="product"
          ></order-item>
        </ul>
        <div class="notes-wrap">
          <span class="desc">备注:</span>
          <span class="val">请尽快发货，谢谢~</span>
        </div>
      </div>
    </div>
    <div class="bottom-wrap">
      <div class="total-price-wrap">
        <span class="desc">合计:</span>
        <span class="val">{{ this.$route.params.totalPrice }}元</span>
      </div>
      <div class="confirm" @click="submitOrder">确认</div>
    </div>
  </div>
</template>

<script>
import TopHead from "../components/TopHead";
import OrderItem from "../components/OrderItem";
import Service from "../service/index.js";
export default {
  name: "submitOrder",
  data() {
    return {
      orderList: []
    };
  },
  components: {
    tophead: TopHead,
    orderItem: OrderItem
  },
  created() {
    this.orderList = JSON.parse(sessionStorage.getItem("orderPro"));
  },
  methods: {
    submitOrder() {
      Service.submitOrder({
        store_name: sessionStorage.getItem("store-name"),
        order: this.orderList
      })
        .then(res => {
          if (res.data.code === 1) {
            localStorage.removeItem("productsInCart");
            sessionStorage.removeItem("selectedPro");
            sessionStorage.removeItem("orderPro");
            this.$router.push("/home");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.submitOrder {
  .scroll-view {
    margin-bottom: px2rem(109);
    .contact-info-wrap {
      height: px2rem(170);
      padding-left: px2rem(30);
      padding-top: px2rem(28);
      background-color: #fafafa;
      border-bottom: 1px solid #757575;
      .receiver {
        font-size: px2rem(28);
        color: #000;
        display: flex;
        justify-content: space-between;
        margin-right: px2rem(34);
      }
      .delivery-address {
        font-size: px2rem(24);
        color: #757575;
        line-height: px2rem(44);
        margin-top: px2rem(15);
        margin-right: px2rem(70);
        margin-left: px2rem(40);
      }
    }
    .order-detail-wrap {
      // padding: 0 px2rem(28);
      .notes-wrap {
        height: px2rem(80);
        line-height: px2rem(80);
        font-size: px2rem(22);
        padding-left: px2rem(28);
        border-bottom: 1px solid #757575;
        .val {
          margin-left: px2rem(20);
        }
      }
    }
  }
  .bottom-wrap {
    width: 100%;
    box-sizing: border-box;
    height: px2rem(110);
    padding: 0 px2rem(28);
    background-color: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    font-size: px2rem(24);
    border-top: 1px solid #757575;
    .total-price-wrap {
      margin-top: px2rem(44);
      .val {
        margin-left: px2rem(12);
        color: #ff0000;
        font-size: px2rem(26);
      }
    }
    .confirm {
      width: px2rem(168);
      height: px2rem(70);
      line-height: px2rem(70);
      background-color: #10903d;
      color: #fff;
      text-align: center;
      font-size: px2rem(26);
      border-radius: px2rem(5);
      margin-top: px2rem(20);
    }
  }
}
</style>
