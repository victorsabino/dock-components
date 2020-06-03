<template>
  <div class="badge">
    {{ name }}
    <div @click="onDelete" class="closeWrapper">
      <md-icon>close</md-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "onDelete"]
};
</script>

<style scoped>
.badge {
  background-color: #4eb9b1;
  height: 35px;
  width: auto;
  border-radius: 16px;
  display: flex;
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
  margin-left: 10px;
  margin-top: 2px;
}
.closeWrapper i {
  font-size: 15px !important;
  position: absolute;
  top: -5px;
  left: -4px;
}
</style>
