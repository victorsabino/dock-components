<template>
  <div class="TimelineRoot" data-testid="timeline">
    <div
      class="lineWrapper"
      v-for="(checkpoint, index) in checkpoints"
      :key="index"
    >
      <div :class="checkpoint.completed ? 'line' : 'dashedLine'" />
      <div class="step">
        <div class="stepTitle">{{ checkpoint.name }}</div>
        <div :class="checkpoint.completed ? 'circle' : 'emptyCircle'" />
        <div class="stepDate">{{ checkpoint.date }}</div>
      </div>
      <div
        :class="checkpoint.completed ? 'line' : 'dashedLine'"
        v-if="index + 1 === checkpoints.length"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkpoints: {
      default: () => [],
      type: Array,
    },
  },
  components: {},
};
</script>

<style scoped>
.TimelineRoot {
  display: flex;
  margin-top: 20px;
  margin-left: 15px;
  width: 100%;
}
.circle {
  width: 12px;
  height: 12px;
  background-color: #4eb9b1;
  border: 1px solid #4eb9b1;
  border-radius: 50%;
  margin-top: 1px;
}
.emptyCircle {
  width: 12px;
  height: 12px;
  background-color: transparent;
  border: 1px solid #4eb9b1;
  border-radius: 50%;
}
.line {
  width: 60px;
  height: 0px;
  border-top: 1px solid #10434f;
  border-bottom: 1px solid #10434f;
  margin-top: 6px;
  border-radius: 10px;
  width: 100%;
}
.dashedLine {
  width: 60px;
  height: 0px;
  border-top: 1px dashed #10434f;
  border-style: 1px dashed;
  margin-top: 6px;
  border-radius: 10px;
  width: 100%;
}
.TimelineRoot > div {
  display: flex;
  width: 26%;
}
.TimelineRoot > div:last-child {
  display: flex;
  width: 47%;
}
.step {
  margin-top: 0px;
  position: relative;
}
.stepTitle {
  font: normal normal normal 14px/19px Open Sans;
  letter-spacing: 0.7px;
  color: #10434f;
  margin-left: -7px;
  position: absolute;
  top: -20px;
}
.stepDate {
  font: normal normal normal 14px/19px Open Sans;
  letter-spacing: 0.7px;
  color: #10434f;
  margin-left: -7px;
  position: absolute;
  top: 20px;
}

@media only screen and (max-width: 900px) {
  .lineWrapper:first-child {
    width: 15% !important;
  }
  .lineWrapper {
    display: flex;
    width: 29% !important;
  }
  .lineWrapper:last-child {
    display: flex;
    width: 47% !important;
  }
  .stepDate {
    max-width: 105px !important;
  }
}
</style>
