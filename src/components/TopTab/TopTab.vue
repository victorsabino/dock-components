<template>
  <div class="topTabRoot">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="topTab"
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
    }
  },
  data: function() {
    return {
      active: 0
    };
  },
  methods: {
    setActive: function(key) {
      this.$emit("key", key);
      this.active = key;
    },
    activeClass: function(key) {
      let _class = "topTabTitle";
      if (key !== this.active) _class += " topTabTitleInactive";
      return _class;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');

.topTabRoot {
  height: 30px;
  min-width: 310px;
  display: flex;
  margin-top: 17px;
  cursor: pointer;
}
.topTab {
  background: #F4F1EB 0% 0% no-repeat padding-box;
  margin-right: 20px;
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
  opacity: 0.2;
}
.tabIcon {
  color: #10434F !important;
  font-size: 22px !important;
  margin-top: -1px;
}
</style>
