<template>
  <div class="MenuList">
    <md-menu md-size="medium" md-align-trigger>
      <md-button v-if="isButton" md-menu-trigger>
        <slot name="button" />
      </md-button>
      <div v-else md-menu-trigger>
        <slot name="button" />
      </div>

      <md-menu-content class="MenuListItems" :style="{ zIndex: zIndex }">
        <md-menu-item
          disableRipple="true"
          :key="item.name"
          v-for="item in items"
          ><div class="nameWrapper" @click="getClick(item)">{{ item.name }}</div></md-menu-item
        >
      </md-menu-content>
    </md-menu>
  </div>
</template>
<script>
export default {
  name: "MenuList",
  props: {
    items: {
      type: Array,
      default: () => [{}]
    },
    isButton: {
      type: Boolean,
      deafult: true
    },
    zIndex: {
      type: Number,
      default: 2
    }
  },
  methods: {
    getClick: function (item) {
      if (!item || !item.onClick) return;
      item.onClick();
    }
  }
};
</script>
<style scoped>
.MenuList {
  height: 40px;
}
</style>
<style>
.MenuList .md-button {
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 50%;
}
.MenuListItems .md-menu-content-container {
  border-radius: 4px !important;
}
.MenuListItems .md-list {
  background-color: #ebe8e3 !important;
  border-radius: 4px !important;
  padding: 0 17px !important;
}
.MenuListItems .md-list-item-button:hover {
  background-color: transparent !important;
}
.MenuListItems .md-list-item {
  border-bottom: 1px solid #d8d1c4;
  border-top: 1px solid #ffffff;
}
.MenuListItems .md-list-item:first-child {
  border-top: 0;
}
.MenuListItems .md-list-item:last-child {
  border-bottom: 0;
}
</style>
