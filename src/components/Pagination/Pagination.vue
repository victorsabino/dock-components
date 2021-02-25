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
          <span v-if="shouldShowFirstDot"> ... </span>
        </div>
        <div
          v-for="(page, index) in generatedPages()"
          :key="index"
          :class="'page ' + selectPageClass(page)"
          @click="() => setPage(page)"
        >
          <span> {{ page }} </span>
        </div>
        <div class="page">
          <span v-if="parseInt(current) + 8 < length"> ... </span>
          <span :class="length === current ? 'highlight' : ''"  @click="() => setPage(this.length)">{{
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
  computed: {
    shouldShowFirstDot () {
      if (this.length < 8) return false;
      return this.current > 2;
    },
  },
  methods: {
    setPage(page) {
      if (page > this.length) return;
      if (page <= 0) return;
      this.current = page;
      this.$emit("input", page);
    },
    selectPageClass(page) {
      if (page >= this.length || page === 1)  {
        return "disabled";
      }
      if (page === this.current) {
        return "highlight";
      }
      return "";
    },
    generatedPages() {
      let arr = [];
      const _current = parseInt(this.current);
      let num;
       if (this.length <= 8 ) {
        for (let i = 0; i < 8; i++) {
          arr.push(i + 2);
        }
      }
      else if (_current > 1) {
        num = this.length - 8;
        for (let i = 0; i < Math.min(this.length, 8); i++) {
          arr.push(_current + i - Math.min(4, _current - 2));
        }
      }
      else if (_current + 8 <= this.length) {
        num = this.length - 8;
        for (let i = 0; i < Math.min(this.length, 8); i++) {
          arr.push(_current + i);
        }
      } else {
        num = this.length - 8;

        for (let i = 0; i < Math.min(this.length, 8); i++) {
          num = this.length - 8 + i;
          arr.push(num);
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
  background-color: #4EB9B1;
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
  color: #10434F;
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
  width: fit-content;
  justify-content: space-between;
}
.page {
  min-width: 23px;
  padding: 0 10px;
  color:#4EB9B1;
  cursor: pointer;
}
.disabled {
  color: #165e6f;
  cursor: default;
  display: none;
}
@media only screen and (max-width: 900px) {
  .pageWrapper {
    max-width: 270px;
  }
  .page {
    padding: 0 4px;
    min-width: 20px;
  }
  
}
</style>