<template>
  <div class="MenuListContainer" v-if="open">
    <div class="menu">
        <div class="file" :key="item.id" v-for="(item, index) in items">
          <div @click="() => _click(item.onClick)" class="flex rowWrapper">
            <div  class="flex">
              <div class="iconWrapper" v-if="item.icon"> <md-icon style="color: #e34642 !important"> {{item.icon}} </md-icon></div> 
              <div class="menuListName"> {{item.name}} </div>
            </div>
            <div class="divisor" v-if="index !== (items.length - 1)"/>
          </div>
        </div>
      </div>
      <div class="fakebg" @click="toggleMenu" v-if="open" />
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuList",
  data: function () {
    return {
      open: true,
    };
  },
  props: {
    items: {
      type: Number,
      default: () => [{name: 'test2'}, {name: 'test2'}, {name: 'test2'}]
    },
    zIndex: {
      type: Number,
      default: 2,
    },
  },
  methods: {
    toggleMenu: function () {
      return (this.open = !this.open);
    },
    _click: function (click) {
      if(click) click();
      this.toggleMenu();
    }
  },
};
</script>
<style scoped>
.UploadListMenu {
  height: 40px;
}
.uploadListMenuTitle {
  font-size: 12px;
  letter-spacing: 0.4;
  font-family: "Open Sans", sans-serif;
  color: #00000099;
  text-decoration: underline;
}

.file {
  height: 27px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
}
.menu {
  z-index: 999;
}
.MenuListContainer {
  padding: 3px 9px;
  width: 160px;
  min-height: 50px;
  background-color: #ebe8e3;
  border-radius: 4px;
  position: absolute;
  z-index: 999;
  left:0px;
  text-align: left;
  cursor: pointer;
}
.menuListName {
  color: #00000099;
  letter-spacing: 0.4px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  padding: 3px 3px;
}
.divisor {
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #d8d1c4;
  border-top: 1px solid #ffffff;
  margin-top: 3px;
  margin-bottom: 6px;
}
.fakebg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.1;
  z-index: -1;
  cursor: default;
}
.rowWrapper {
  width: 100%;
  cursor: pointer;
  flex-direction: column;

}
</style>
