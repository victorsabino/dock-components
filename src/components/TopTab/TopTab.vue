<template>
  <div class="topTabRoot">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="topTab"
      :class="activeClass(index)"
      @click="() => setActive(index)"
    >
      <md-icon v-if="tab.icon" class="tabIcon"> {{ tab.icon }} </md-icon>
      <md-img v-if="tab.img" class="tabIcon"> {{ tab.icon }} </md-img>
      <img v-if="tab.img" :src="tab.img">
      <div v-if="tab.title" :class="activeClass(index)">
        {{ tab.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    key: {
      type: Number,
      defualt: 0
    }
  },
  data: function() {
    return {
      active: 0
    };
  },
  methods: {
    setActive: function(key) {
      if(this.tabLock !== null) {
        this.$emit("key", key);
        this.active = this.tabLock;
      }else {
        this.$emit("key", key);
        this.active = key;
      }
    },
    activeClass: function(key) {
      let _class = "topTabTitle";
      if (key !== this.active) _class += " topTabTitleInactive";
      return _class;
    }
  },
  mounted () {
    this.active = this.key;
  },
  updated () {
    this.active = this.key;
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');

.topTabRoot {
  height: 30px;
  width: Calc(100% - 100px);
  max-width: 1300px;
  display: flex;
  margin-top: 17px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
}
.topTab {
  background: #F4F1EB 0% 0% no-repeat padding-box;
  margin-right: 5px;
  padding: 5px 10px;
  display: flex;
  border-radius: 4px 4px 0px 0px;
}
.topTabTitle {
  font-weight: 500;
  font-family: Raleway, "sans-serif";
  font-weight: bold;
  font-size: 15px;
  margin-left: 5px;
  margin-top: 2px;
  color: #10434F;
  transition: all 0.5s;
  text-transform: uppercase;
}
.topTabTitleInactive {
  opacity: 0.5;
}
.tabIcon {
  color: #10434F !important;
  font-size: 22px !important;
  margin-top: -2px;
}
.tabImg {
  margin-top: 2px;
  margin-right: 3px;
}
</style>
