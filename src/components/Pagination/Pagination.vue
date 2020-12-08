<template>
  <div class="paginationRoot">
    <slot name="content" />
    <div class="pages flex">
      <div class="nextWrapper" @click="() => setPage(this.current - 1)">
        <div class="outerRight">
          <div class="inner" />
        </div>
      </div>
      <div class="pageWrapper">
        <div class="page" @click="() => setPage(1)">
          <span :class="1 === current ? 'highlight' : ''"> 1 </span>
          <span v-if="current > 2"> ... </span>
        </div>
        <div
          v-for="(page, index) in generatedPages"
          :key="index"
          :class="'page ' + selectPageClass(page)"
          @click="() => setPage(page)"
        >
          <span> {{ page }} </span>
        </div>
        <div class="page">
          <span v-if="parseInt(current) + 8 < length"> ... </span>
          <span :class="length === current ? 'highlight' : ''">{{
            length
          }}</span>
        </div>
      </div>
      <div class="nextWrapper" @click="() => setPage(this.current + 1)">
        <div class="outerLeft">
          <div class="inner" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    length: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    setPage(page) {
      console.log("this.current ", this.current, this.length, page);
      if (page > this.length) return;
      if (page <= 0) return;
      this.current = page;
      this.$emit("input", page);
    },
    selectPageClass(page) {
      if (page > this.length) {
        return "disabled";
      }
      if (page === this.current) {
        return "highlight";
      }
      return "";
    },
  },
  computed: {
    generatedPages() {
      let arr = [];
      if (this.current <= this.length) {
        for (let i = 0, _current = parseInt(this.current); i < 8; i++) {
          if (_current + i <= 1) {
          } else {
            let num = _current + 8 >= this.length ? this.length - (8 - i)  : i + _current;
            arr.push(num);
          }
        }
      }
      return arr;
    },
  },
};
</script>

<style scoped>
.paginationRoot {
  display: flex;
}
.paginationWrapper {
  display: flex;
}
.pages {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.nextWrapper {
  margin: 10px;
  position: relative;
  width: 28px;
  height: 45px;
  display: flex;
}

.inner {
  transform: rotate(45deg);
  background-color: #f4f1eb;
  cursor: pointer;
  width: 25px;
  height: 25px;
  top: 20px;
  left: -15px;
  position: relative;
  border-radius: 5px;
}
.highlight,
.highlight span {
  color: #4eb9b1;
  font-weight: 500;
}
.outerRight {
  width: 30px;
  height: 50px;
  overflow: hidden;
  transform: rotate(180deg);
}
.outerLeft {
  width: 30px;
  height: 50px;
  overflow: hidden;
  margin-top: -15px;
}
.pageWrapper {
  display: flex;
  margin-top: 19px;
  min-width: 400px;
  justify-content: space-between;
}
.page {
  padding: 0 10px;
  color: #f4f1eb;
  cursor: pointer;
}
.disabled {
  color: #165e6f;
  cursor: default;
  display: none;
}
@media only screen and (max-width: 900px) {
  .pageWrapper {
    width: 275px !important;
  }
  .page {
    padding: 0 4px;
  }
}
</style>