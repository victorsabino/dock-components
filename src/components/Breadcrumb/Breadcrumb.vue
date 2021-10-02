<template>
  <div class="breadcrumbWrapper">
    <div class="breadcrumb" v-for="(step, index) in steps" :key="step+index">
      <div class="labels" @click="() => step.action()">{{ step.label }}</div>
      <span class="arrow"> > </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      steps: {
        type: Array,
        default: () => []
      },
    },
  }
</script>

<style scoped>
.breadcrumbWrapper {
  position: absolute;
  display: flex;
  margin-left: 72px;
  margin-top: 12px;
  color: #10434F;
}
.breadcrumb {
  display: flex;
}
.breadcrumb .labels {
  text-decoration: underline;
  font-style: italic;
  cursor: pointer
}
.breadcrumb:last-child .labels {
  text-decoration: unset;
  font-style: italic;
  cursor: unset
}
.breadcrumb .arrow {
  margin: 0px 8px;
}
.breadcrumb:last-child .arrow {
  display: none;
}
</style>