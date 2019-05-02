import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Notice from "./views/Notice.vue";
import Stores from "./views/Stores.vue";
import Activity from "./views/Activity.vue";
import PlaceOrder from "./views/PlaceOrder.vue";
import ProductSel from "./views/ProductSel.vue";
import Cart from "./views/Cart.vue";
import SubmitOrder from "./views/SubmitOrder.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    {
      path: "/gstg",
      name: "Notice",
      component: Notice
    },
    {
      path: "/jdbf",
      name: "stores",
      component: Stores
    },
    {
      path: "/dnhd/:id",
      name: "activity",
      props: true,
      component: Activity
    },
    {
      path: "/xd",
      name: "placeOrder",
      component: PlaceOrder
    },
    {
      path: "/cpxz",
      name: "productSel",
      // props: true,
      component: ProductSel
    },
    {
      path: "/gwc",
      name: "cart",
      // props: true,
      component: Cart
    },
    {
      path: "/tjdd/:totalPrice",
      name: "submitOrder",
      props: true,
      component: SubmitOrder
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
