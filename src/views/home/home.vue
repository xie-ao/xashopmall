<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomponents/HomeSwiper.vue";
import { getHomeMultidata, getHomeGoods } from "network/home";
import HomeRecommendView from "./childcomponents/HomeRecommendView.vue";
import FeatureView from "./childcomponents/FeatureView.vue";
import TabControl from "../../components/content/tabcontrol/TabControl.vue";
import GoodsList from "../../components/content/goodslist/GoodsList.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidataTask();
    this.getHomeGoodsTask("pop");
    this.getHomeGoodsTask("new");
    this.getHomeGoodsTask("sell");
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      console.log("index", index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidataTask() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoodsTask(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 2;
}
</style>