<template>
  <div class="cart">
    <div class="scroll-view">
      <tophead :title="currentStoreName">
        <div slot="r">编辑</div>
      </tophead>
      <div class="cart-products">
        <div
          class="warehouse"
          v-for="(warehouse, index) in productsInCart"
          :key="index"
        >
          <div class="warehouse-name-wrap">
            <span
              class="mark"
              :class="{ active: allChildrenSelected(index) }"
              @click="changeWarehouseAll(index)"
            ></span>
            <span class="warehouse-name">
              {{ warehouse[0].selectedWarehouse }}</span
            >
            <span class="notes"
              >备注
              <i class="icon iconfont icon-web-icon-"></i>
            </span>
          </div>
          <ul class="product-list">
            <cart-item
              v-for="(item, productIndex) in warehouse"
              :key="productIndex"
              :productInfo="item"
              :select="selectWarehouseAll[index][productIndex]"
              :index="index"
              :productIndex="productIndex"
              @changeQuantity="changeQuantity"
              @changeSel="childrenChangeSel"
            ></cart-item>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-wrap">
      <span
        class="mark"
        :class="{ active: selAll }"
        @click="selAllWarehouse"
      ></span>
      <div class="select-all">
        <span class="desc">全选</span>
        <div class="total-price-wrap">
          <span class="desc">合计:</span>
          <span class="total-price">{{ calTotalPrice }}元</span>
        </div>
      </div>
      <div class="confirm-wrap" @click="submitOrder">
        <div class="confirm">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from "../components/TopHead";
import { mapState } from "vuex";
import CartItem from "../components/CartItem";
import "../assets/cart-font/iconfont.css";
import "../style/cart.scss";
export default {
  name: "cart",
  data() {
    return {
      selectWarehouseAll: [],
      selAll: true
    };
  },
  components: {
    tophead: TopHead,
    cartItem: CartItem
  },
  computed: {
    ...mapState(["currentStoreName", "productsInCart"]),
    calTotalPrice() {
      let price = 0;
      for (let i = 0; i < this.productsInCart.length; i++) {
        for (let j = 0; j < this.productsInCart[i].length; j++) {
          if (this.selectWarehouseAll[i][j]) {
            price +=
              this.productsInCart[i][j].price *
              this.productsInCart[i][j].quantity;
          }
        }
      }
      return price.toFixed(2);
    }
  },
  methods: {
    submitOrder() {
      let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
      let orderedPro = [];
      for (let i = 0; i < productsInCart.length; i++) {
        orderedPro[i] = [];
        for (let j = 0; j < productsInCart[i].length; j++) {
          if (this.selectWarehouseAll[i][j]) {
            console.log(productsInCart[i][j]);
            orderedPro[i].push(productsInCart[i][j]);
          }
        }
      }
      sessionStorage.setItem("orderPro", JSON.stringify(orderedPro));
      this.$router.push(`/tjdd/${this.calTotalPrice}`);
    },
    selAllWarehouse() {
      this.selAll = !this.selAll;
      if (this.selAll) {
        for (let i = 0; i < this.selectWarehouseAll.length; i++) {
          for (let j = 0; j < this.selectWarehouseAll[i].length; j++) {
            this.$set(this.selectWarehouseAll[i], j, true);
            this.$set(this.selectWarehouseAll, i, this.selectWarehouseAll[i]);
          }
        }
      } else {
        for (let i = 0; i < this.selectWarehouseAll.length; i++) {
          for (let j = 0; j < this.selectWarehouseAll[i].length; j++) {
            this.$set(this.selectWarehouseAll[i], j, false);
            this.$set(this.selectWarehouseAll, i, this.selectWarehouseAll[i]);
          }
        }
      }
    },
    changeWarehouseAll(index) {
      for (let i = 0; i < this.selectWarehouseAll[index].length; i++) {
        if (!this.selectWarehouseAll[index][i]) {
          for (let j = 0; j < this.selectWarehouseAll[index].length; j++) {
            this.$set(this.selectWarehouseAll[index], j, true);
            this.$set(
              this.selectWarehouseAll,
              index,
              this.selectWarehouseAll[index]
            );
          }
          return;
        }
      }
      for (let i = 0; i < this.selectWarehouseAll[index].length; i++) {
        this.$set(this.selectWarehouseAll[index], i, false);
        this.$set(
          this.selectWarehouseAll,
          index,
          this.selectWarehouseAll[index]
        );
      }
    },
    allChildrenSelected(index) {
      for (let i = 0; i < this.selectWarehouseAll[index].length; i++) {
        if (!this.selectWarehouseAll[index][i]) {
          return false;
        }
      }
      return true;
    },
    childrenChangeSel(indexes) {
      let warehouseIndex = indexes.warehouseIndex;
      let productIndex = indexes.productIndex;
      this.$set(
        this.selectWarehouseAll[warehouseIndex],
        productIndex,
        !this.selectWarehouseAll[warehouseIndex][productIndex]
      );
      this.$set(
        this.selectWarehouseAll,
        warehouseIndex,
        this.selectWarehouseAll[warehouseIndex]
      );
    },
    changeQuantity(product) {
      for (let i = 0; i < this.productsInCart.length; i++) {
        for (let j = 0; j < this.productsInCart[i].length; j++) {
          if (
            this.productsInCart[i][j].code === product.code &&
            this.productsInCart[i][j].warehouse_id === product.warehouse_id
          ) {
            this.productsInCart[i][j].quantity = product.quantity;
            break;
          }
        }
      }
      this.$store.commit("changeQuantity", this.productsInCart);
    }
  },
  created() {
    for (let i = 0; i < this.productsInCart.length; i++) {
      this.selectWarehouseAll[i] = [];
      for (let j = 0; j < this.productsInCart[i].length; j++) {
        this.selectWarehouseAll[i].push(true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  .scroll-view {
    margin-bottom: px2rem(111);
    .cart-products {
      .warehouse {
        .mark {
          @include cartMark(px2rem(30));
        }
        .mark.active {
          background-color: #00a2eb;
        }
        .warehouse-name-wrap {
          height: px2rem(84);
          line-height: px2rem(84);
          padding-right: px2rem(28);
          padding-left: px2rem(80);
          background-color: #fafafa;
          font-size: px2rem(28);
          border-bottom: 1px solid #ccc;
          position: relative;
          display: flex;
          justify-content: space-between;
          .warehouse-name {
          }
          .notes {
            color: #10903d;
            i.icon {
              font-size: px2rem(30);
            }
          }
        }
      }
    }
  }
  .bottom-wrap {
    width: 100%;
    height: px2rem(110);
    position: fixed;
    bottom: 0;
    padding-right: px2rem(28);
    padding-left: px2rem(70);
    box-sizing: border-box;
    font-size: px2rem(24);
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .mark {
      @include cartMark(px2rem(43));
    }
    .mark.active {
      background-color: #00a2eb;
    }
    .select-all {
      display: flex;
      margin-top: px2rem(40);
      .total-price-wrap {
        margin-left: px2rem(62);
        .total-price {
          color: #ff0000;
          font-size: px2rem(26);
          margin-left: px2rem(15);
        }
      }
    }
    .confirm-wrap {
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
