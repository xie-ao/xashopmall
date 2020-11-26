<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="deeppink">
      <img slot="item-icon" src="~assets/image/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/image/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="deeppink">
      <img slot="item-icon" src="~assets/image/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/image/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="deeppink">
      <img slot="item-icon" src="~assets/image/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/image/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="deeppink">
      <img slot="item-icon" src="~assets/image/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/image/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

  <script>
import TabBar from "components/common/tabBar/TabBar.vue";
import TabBarItem from "components/common/tabBar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>