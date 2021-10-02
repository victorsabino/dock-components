<template>
  <div class="">
    <div class="menu">
      <div @click="toggleMenu">
        <slot name="button" />
      </div>
      <div class="fileWrapper MenuListContainer" v-if="open" :style="style">
        <div class="file" :key="item.id" v-for="(item, index) in filteredItems">
          <div v-if="item" @click="() => _click(item.onClick)" class="rowWrapper">
            <div class="flex">
              <div class="iconWrapper" v-if="item.icon">
                <md-icon>{{item.icon}}</md-icon>
              </div>
              <div class="menuListName">{{item.name}}</div>
            </div>
            <div class="divisor" v-if="index !== (filteredItems.length - 1)" />
          </div>
        </div>
      </div>
    </div>
    <div class="fakebg" @click="toggleMenu" v-if="open" />
  </div>
</template>
<script>
export default {
  name: "MenuList",
  data: function () {
    return {
      open: false,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 2,
    },
    isButton: {
      type: Boolean,
      deafult: true,
    },
    width: {
      default: '150px',
      type: String,
    }
  },
  methods: {
    toggleMenu: function () {
      return (this.open = !this.open);
    },
    _click: function (click) {
      if (click) click();
      this.toggleMenu();
    },
  },
  computed: {
    style: function () {
      return `width: ${this.width}`;
    },
    filteredItems: function() {
      return this.items.filter(filter => filter)
    }
  }
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
}
.menu {
  z-index: 999;
}
.MenuListContainer {
  padding: 6px 9px;
  width: 160px;
  min-height: 50px;
  background-color: #ebe8e3;
  border-radius: 4px;
  position: absolute;
  z-index: 999;
  left: -45px;
  text-align: left;
  box-shadow: 0 2px 1px #d8d1c4;
}
.menuListName {
  color: #00000099;
  letter-spacing: 0.4px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  padding: 3px 3px;
}
.divisor {
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #d8d1c4;
  border-top: 1px solid #fff;
  position: absolute;
}
.fakebg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.1;
  z-index: 3;
  cursor: default;
}
.rowWrapper {
  width: 100%;
  flex-direction: column;
  position: relative;
}
.flex{
  cursor: pointer;
}
@media only screen and (max-width: 900px) {
  .file {
    height: 100% !important
  }
  .menuListName {
    height: 27px;
  }
}
</style>
