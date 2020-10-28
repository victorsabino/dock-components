<template>
  <div class="TimelineRoot" data-testid="timeline">
    <div
      class="lineWrapper"
      v-for="(checkpoint, index) in checkpoints"
      :key="index"
    >
      <div :class="checkpoint.completed ? 'line': 'dashedLine'"/>
      <div class="step">
        <div class="stepTitle">{{checkpoint.name}}</div>
        <div :class="checkpoint.completed ? 'circle': 'emptyCircle'" />
      </div>
      <div :class="checkpoint.completed ? 'line': 'dashedLine'" v-if="index + 1 === checkpoints.length"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkpoints: {
      default: () => [
      ],
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
}
.dashedLine {
  width: 60px;
  height: 0px;
  border-top: 1px dashed #10434f;
  margin-top: 6px;
  border-radius: 10px;
}
.lineWrapper {
  display: flex;
}
.step {
  margin-top: -10px;
}
.stepTitle {
  letter-spacing: 0.4px;
  font-size: 10px;
  font: normal normal normal 8px/11px Open Sans;
  color: #10434f;
  margin-left: -2px;
}
</style>