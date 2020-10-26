<template>
  <div class="percentageBar" data-testid="percentageBar">
    <div :style="style" class="fill">
    </div>
    <div class="percentage"> {{percentage}}% </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      default: "0",
      type: String
    }
  },
  computed: {
    style() {
      return `width: ${this.percentage}%; border-top-right-radius: 0; border-bottom-right-radius: 0`;
    }
  }
};
</script>

<style scoped>
.percentageBar {
  width: 100%;
  min-width: 100px;
  border-radius: 50px;
  height: 20px;
  border: 1px solid #7ec6ae;
  padding: 0;
  text-align: center;
  position: relative;
}
.fill {
  height: 100%;
  width: 100%;
  background-color: #7ec6ae;
  border-radius: 50px;
}

.percentage {
  position: absolute;
  top: 0;
  left: 45%;
}
</style>
