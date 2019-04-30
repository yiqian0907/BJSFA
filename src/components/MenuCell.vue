<template>
  <div class="menucell">
    <router-link :to="url" v-if="url !== ''">
      <img :src="imgURL" alt="" v-if="imgURL !== ''" />
      <div class="title" v-if="title !== ''">{{ title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "menucell",
  props: ["url", "imgURL", "title"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.menucell {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  a {
    display: block;
    text-align: center;
  }
  img {
    width: px2rem(62);
    height: px2rem(62);
    vertical-align: top;
  }
  .title {
    font-size: px2rem(24);
    color: #000;
    margin-top: px2rem(36);
  }
}
</style>
