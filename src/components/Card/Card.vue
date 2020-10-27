<template>
  <div class="cardRoot" data-testid="card">
    <slot name="card"/>
  </div>
</template>

<script>
export default {
  props: {
  },
  components: {
  },
};
</script>

<style scoped>
.cardRoot {
  min-height: 100px;
  min-width: 300px;
  width: fit-content;
  height: auto;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 4px 4px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  padding: 10px;
}
</style>