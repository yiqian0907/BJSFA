<template>
  <li class="cartItem">
    <span
      class="mark"
      :class="{ active: selected }"
      @click="changeSelection"
    ></span>
    <div class="img-box">
      <img :src="require('../assets/logo.png')" />
    </div>
    <div class="product-info">
      <div class="name">{{ productInfo.name }}</div>
      <div class="sel-warehouse">
        <span class="desc">选中仓库:</span>
        <span class="val">
          {{ productInfo.warehouse_id }}-{{
            productInfo.selectedWarehouse
          }}</span
        >
      </div>
      <div class="price-quantity-wrap">
        <div class="price">
          <span class="desc">价格:</span>
          <span class="val">{{ productsPrice }}元</span>
        </div>
        <div class="edit-quantity">
          <div class="editor" @click="quantity <= 1 ? 1 : quantity--">
            <span class="minus">-</span>
          </div>
          <input class="val" type="text" v-model="quantity" />
          <div class="editor" @click="quantity++">
            <span class="plus">+</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "cartItem",
  props: ["productInfo", "select", "index", "productIndex"],
  data() {
    return {
      quantity: 0,
      selected: true
    };
  },
  watch: {
    select() {
      this.selected = this.select;
    },
    quantity() {
      this.$emit("changeQuantity", {
        code: this.productInfo.code,
        warehouse_id: this.productInfo.warehouse_id,
        quantity: this.quantity
      });
    }
  },
  created() {
    this.quantity = this.productInfo.quantity;
    this.selected = this.select;
  },
  computed: {
    productsPrice() {
      return (this.productInfo.price * this.quantity).toFixed(2);
    }
  },
  methods: {
    changeSelection() {
      this.selected = !this.selected;
      this.$emit("changeSel", {
        warehouseIndex: this.index,
        productIndex: this.productIndex
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cartItem {
  height: px2rem(180);
  padding-left: px2rem(80);
  position: relative;
  font-size: px2rem(24);
  padding-top: px2rem(28);
  border-bottom: 1px solid #757575;
  display: flex;
  justify-content: space-between;
  .mark {
    @include cartMark(px2rem(77));
  }
  .mark.active {
    background-color: #00a2eb;
  }
  .img-box {
    width: px2rem(123);
    height: px2rem(123);
    border: 1px solid #757575;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-info {
    margin-left: px2rem(27);
    padding-right: px2rem(28);
    flex: 1 1;
    .sel-warehouse {
      margin-top: px2rem(14);
      color: #757575;
      .val {
        margin-left: px2rem(18);
      }
    }
    .price-quantity-wrap {
      margin-top: px2rem(38);
      display: flex;
      justify-content: space-between;
      .price {
        .val {
          color: #ff0000;
          margin-left: px2rem(16);
          font-size: px2rem(26);
        }
      }
      .edit-quantity {
        display: flex;
        .editor {
          width: px2rem(46);
          height: px2rem(46);
          border: 1px solid #000;
          border-radius: px2rem(4);
          text-align: center;
          line-height: px2rem(46);
        }
        .val {
          width: px2rem(90);
          height: px2rem(46);
          line-height: px2rem(46);
          text-align: center;
          font-size: px2rem(30);
          margin: 0 px2rem(14);
          border: 1px solid #000;
          border-radius: px2rem(4);
          outline: none;
        }
      }
    }
  }
}
</style>
