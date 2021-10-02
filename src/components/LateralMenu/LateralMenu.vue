<template>
  <div class="lateralMenuWrapper">
    <div class="itemLateralMenu" v-for="(item, index) in itens" :key="index" @click="setActive(index)" :class="activeClass(index)" :tabKey="tabKey">
      <div class="itemLateralName">
        <span>
          <md-icon class="itemLateralIcon">{{item.icon}}</md-icon>
        </span>
        {{item.name}}
        <span v-if="item.quantity">
          ({{padLeft(item.quantity, 2)}})
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itens: {
      type: Array,
      default: () => []
    },
    tabKey: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    setActive(id) {
      this.$emit("key", id);
      this.active = id;            
    },
    activeClass(id) {
      let _class = "";
      if (id === this.active) _class = "itemLateralMenuActive";
      return _class;
    },
    padLeft(nr, n, str){
      return Array(n-String(nr).length+1).join(str||'0')+nr;
    }
  },
  mounted () {
    this.active = parseInt(this.tabKey);
  },
  updated () {
    this.active = parseInt(this.tabKey);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');

.lateralMenuWrapper {
  width: 225px;
  border-radius: 4px;
  overflow: auto;
}
.itemLateralMenu {
  height: 40px;
  background: #4EB9B1;
  border-bottom: 1px solid #F4F1EB;
  cursor: pointer;
  transition: background-color 0.5s ease;
}
.itemLateralMenu:hover {
  background: #3d968f !important;
  transition: background-color 0.5s ease;
}
/* .itemLateralMenu:hover {
   background-color:#10434F !important
} */
.itemLateralMenu:last-child {
  height: 40px;
  background: #4EB9B1;
  border-bottom: 0px solid #F4F1EB;
}
.itemLateralName {
  font-family: Raleway;
  color: #F4F1EB;
  font-size: 14px;
  position: relative;
  top: 50%;
  transform: translate(0px, -50%);
  margin-left: 10px;
  font-weight: bold;
  text-align: initial;
}
.itemLateralMenuActive {
   background-color:#10434F !important
}
.itemLateralIcon {
  color: #F4F1EB !important;
  margin-bottom: 4px;
  font-weight: normal;
}
</style>