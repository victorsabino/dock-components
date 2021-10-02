<template>
  <div class="badgeRoot" data-testid="badge">
    <div class="textWrapper" @click="onClick">
      <Ellipsis :name="name" width="auto"/>
    </div>
    <div @click="onDelete" data-testid="badgeDelete" class="closeWrapper">
      <md-icon>close</md-icon>
    </div>
  </div>
</template>

<script>
import Ellipsis from "../Ellipsis";
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    onClick: {
      type: Function,
      default: () => {}
    },  
    onDelete: {
      type: Function,
      default: () => () => {}
    },
  },
  components: {
    Ellipsis
  },
};
</script>

<style scoped>
.badgeRoot {
  background-color: #4eb9b1;
  height: 35px;
  width: auto;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  padding-top: 7px;
  padding-left: 10px;
  cursor: pointer;
  margin-right: 20px;
}
.closeWrapper {
  background-color: #2c3e50;
  position: relative;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  min-width: 15px;
  margin-left: 10px;
  margin-top: 2px;
}
.closeWrapper i {
  font-size: 15px !important;
  position: absolute;
  top: -5px;
  left: -4px;
  min-width: 20px;
}
.textWrapper {
  width: 89% !important
}
</style>
<style>
.badgeRoot .textWrapper .ellipsis{
  width: auto !important
}
</style>
