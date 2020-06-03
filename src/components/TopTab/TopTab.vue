<template>
  <div class="topTabRoot">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="topTab"
      @click="() => setActive(index)"
    >
      <md-icon v-if="tab.icon"> {{ tab.icon }} </md-icon>
      <div v-if="tab.icon" :class="activeClass(index)">
        {{ tab.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.topTabRoot {
  height: 50px;
  min-width: 290px;
  display: flex;
  margin-top: 17px;
  cursor: pointer;
}
.topTab {
  background-color: #1b4c57;
  margin-right: 20px;
  padding: 7px 10px;
  display: flex;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.topTabTitle {
  font-weight: 500;
  font-family: "Raleway", "sans-serif";
  font-size: 20px;
  margin-left: 5px;
  margin-top: 8px;
  transition: all 0.5s;
}
.topTabTitleInactive {
  opacity: 0.2;
}
</style>
