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
    <ul class="handle-order-list">
      <li class="warehouse" @click="popupVisible = true">
        <span class="desc">仓库</span>
        <div class="val">
          <span class="selWarehouse">
            {{ selectedWarehouse === "" ? "请选择仓库" : selectedWarehouse }}
          </span>
          <i class="icon iconfont icon-youjiantou"></i>
        </div>
      </li>
      <li class="inventory">
        <span class="desc">库存</span>
        <span class="val">{{ productInfo.inventory }}</span>
      </li>
      <li class="quantity">
        <span class="desc">数量</span>
        <div class="val-editor">
          <div class="editor" @click="quantity <= 1 ? 1 : quantity--">
            <span class="minus">-</span>
          </div>
          <input class="val" type="text" v-model="quantity" />
          <div class="editor" @click="quantity++">
            <span class="plus">+</span>
          </div>
        </div>
      </li>
    </ul>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <mt-picker
        :slots="slotValues"
        :showToolbar="true"
        ref="picker"
        :itemHeight="70"
      >
        <div class="confirmSel" @click="confirmSel">确认</div>
      </mt-picker>
    </mt-popup>
    <div class="bottom-wrap">
      <div class="cancel">取消</div>
      <div class="addToCart" @click="addProduct">加入购物车</div>
    </div>
  </div>
</template>

<script>
import TopHead from "../components/TopHead";
import Service from "../service/index.js";
import { MessageBox } from "mint-ui";
import { mapMutations } from "vuex";
export default {
  name: "productSel",
  data() {
    return {
      productInfo: {},
      quantity: 1,
      warehouse: [],
      warehouseName: [],
      selectedWarehouse: "",
      warehouse_id: null,
      popupVisible: false
    };
  },
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    confirmSel() {
      this.selectedWarehouse = this.$refs.picker.getValues()[0];
      this.warehouse_id = this.warehouse.find(
        item => item.name === this.selectedWarehouse
      ).id;
      this.popupVisible = false;
    },
    ...mapMutations(["addToCart"]),
    addProduct() {
      if (this.warehouse_id === null) {
        return;
      }
      this.addToCart({
        ...this.productInfo,
        warehouse_id: this.warehouse_id,
        selectedWarehouse: this.selectedWarehouse,
        quantity: this.quantity
      });
      MessageBox({
        title: "提示",
        message: "加入购物车成功",
        showCancelButton: true,
        confirmButtonText: "进入购物车",
        cancelButtonText: "继续下单"
      }).then(action => {
        if (action === "confirm") {
          this.$router.push("/gwc");
        } else {
          this.$router.push("/xd");
        }
      });
    }
  },
  created() {
    this.productInfo = JSON.parse(sessionStorage.getItem("selectedPro"));
    Service.getWarehouse().then(res => {
      this.warehouse = res.data.data;
      for (let i = 0; i < this.warehouse.length; i++) {
        this.warehouseName.push(this.warehouse[i].name);
      }
    });
  },
  components: {
    tophead: TopHead
  },
  computed: {
    formattedPrice() {
      return this.productInfo.price.toFixed(2);
    },
    slotValues() {
      let slots = [
        {
          flex: 1,
          values: this.warehouseName,
          className: "slot1",
          textAlign: "center"
        }
      ];
      return slots;
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
  .handle-order-list {
    padding-left: px2rem(28);
    font-size: px2rem(30);
    color: #000;
    li {
      height: px2rem(110);
      line-height: px2rem(110);
      border-bottom: 1px solid #ccc;
      padding-right: px2rem(28);
      display: flex;
      justify-content: space-between;
    }
    .warehouse {
      .val {
        display: flex;
        .selWarehouse {
          font-size: px2rem(24);
        }
        i.icon {
          font-size: px2rem(34);
        }
      }
    }
    .quantity {
      .val-editor {
        padding-top: px2rem(32);
        display: flex;
        .editor {
          width: px2rem(46);
          height: px2rem(46);
          border: 1px solid #000;
          border-radius: px2rem(4);
          position: relative;
          & > span {
            position: absolute;
            top: px2rem(-35);
            left: px2rem(13);
          }
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
  .mint-popup {
    width: 100%;
    height: px2rem(300);
    .confirmSel {
      text-align: right;
      font-size: px2rem(26);
      color: #10903d;
      margin-top: px2rem(50);
      margin-right: px2rem(50);
    }
  }
  .bottom-wrap {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    height: px2rem(110);
    line-height: px2rem(110);
    font-size: px2rem(36);
    & > div {
      flex: 1 1 50%;
      text-align: center;
    }
    .cancel {
      color: #ff0000;
      border-right: 1px solid #ccc;
    }
    .addToCart {
      color: #10903d;
    }
  }
}
</style>

<style lang="scss">
.picker {
  height: 100%;
  .picker-slot {
    font-size: px2rem(34) !important;
  }
}
.mint-msgbox {
  width: 60% !important;
  border-radius: px2rem(8) !important;
  .mint-msgbox-header {
    .mint-msgbox-title {
      font-size: px2rem(26);
    }
  }
  .mint-msgbox-content {
    margin-top: px2rem(20);
    margin-bottom: px2rem(20);
    .mint-msgbox-message {
      font-size: px2rem(24);
    }
  }
  .mint-msgbox-btns {
    .mint-msgbox-btn {
      font-size: px2rem(24);
    }
  }
}
</style>
