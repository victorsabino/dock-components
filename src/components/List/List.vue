<template>
    <div class="listItems">
      <div class="listItem" v-for="(item, index) in list" :key="index">
        <div class="item" @click="emit(item)"> {{ computeItem(item) }} </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    attr: {
      type: String,
      default: undefined
    }
  },
  methods: {
    computeItem: function (item) {
      if (this.attr) return item[this.attr];
      return item;
    },
    emit: function (item) {
      this.$emit("click-item", item);
    }
  }
}
</script>

<style scoped>
  .listItems {
    margin-left: 75px;
    margin-top: 15px;
  }
  .listItem {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .item {
    text-align: left;
    color: #10434F;
    text-decoration: underline;
    font-size: 17px;
    letter-spacing: 0.15px;
    margin-bottom: 5px;
  }
</style>