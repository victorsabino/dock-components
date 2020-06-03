<template>
  <div @click.stop="openPriceQuote">
    <div v-if="status !== ''" class="statusCardRoot">
      <div class="verticalLine" />
      <span> {{ computedStatus }} </span>
      <div class="verticalLine" />
    </div>
    <div v-else class="statusCardRoot">
      <span />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: String,
      default: ""
    },
    proposalCount: {
      type: Number,
      default: 0
    },
    openPriceQuotes: {
      type: Function
    }
  },
  methods: {
    openPriceQuote() {
      if (this.status.toLowerCase() === "waiting proposals") {
        this.openPriceQuotes();
      }
    }
  },
  computed: {
    computedStatus() {
      console.log("status ", this.status);
      let status = "";
      switch (this.status.toLowerCase()) {
        case "saved, needs price":
          status = "Needs Price";
          break;
        case "market estimate":
          status = "Estimated";
          break;
        case "waiting proposals":
          status = `Proposals (${this.proposalCount})`;
          break;
        case "done":
          status = "Done";
          break;
        case "contracted, to be provided":
          status = "Contracted";
          break;
        default:
          status = this.status;
      }
      return status;
    }
  }
};
</script>
<style scoped>
.statusCardRoot {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
}
.verticalLine {
  border-right: 1px solid white;
  border-left: 1px solid #d8d1c4;
  margin-right: 13px;
  margin-left: 13px;
}
.statusCardRoot span {
  margin-top: 4px;
  font-size: 14px;
  text-decoration: underline;
  color: #4eb9b1;
  min-width: 90px;
}
</style>
