<template>
  <div class="paginationRoot">
    <slot name="content"/>
    <div class="pages flex">
    <div class="nextWrapper"  @click="() => setPage(this.current - 1)">
      <div class="outerRight">
        <div class="inner"/>
      </div>
    </div>
    <div class="pageWrapper">
      <div class="page" @click="() => setPage(1)" >
        <span :class="1 === current ? 'highlight' : ''"> 1 </span>
        <span v-if="current > 6"> ... </span>
      </div>
      <div v-for="(page, index) in generatedPages" :key="index" class="page"  @click="() => setPage(page)">
        <span :class="page === current ? 'highlight' : ''"> {{page}} </span>
      </div>
      <div class="page">
        <span v-if="current < parseInt(length/2) "> ... </span>
        <span :class="length === current ? 'highlight' : ''">{{length}}</span>
      </div>
    </div>
    <div class="nextWrapper"  @click="() => setPage(this.current+1)">
      <div class="outerLeft">
        <div class="inner"/>
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
      default: 40
    },
  },
  data () {
    return {
      current: 6,
    }
  },
  methods: {
    setPage(page) {
      console.log('this.current ', this.current, this.length, page)
      if (page > this.length) return;
      if (page <= 0) return;
     this.current = page;
     this.$emit("input", page);
    },
  },
  computed: {
    generatedPages () {
      let arr = [];
      if (this.current <= this.length) {
        for (
          let i = 0, _current = parseInt(this.current/2) - 1; 
          i < 8 && this.length >= _current + i -1; 
          i++
        ) {
          if (_current + i <= 1) {}
          else if (_current + i + 1 > this.length) {}
          else arr.push(_current + i)
        }
      }
      return arr;
    }
  }
};
</script>

<style>
.paginationRoot {
  display: flex;
}
.paginationWrapper {
  display: flex;
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
  background-color: silver;
  cursor: pointer;
  width: 25px;
  height: 25px;
  top: 20px;
  left: -15px;
  position: relative;
  border-radius: 5px;
}
.highlight {
  color: black;
  font-weight: 500;
}
.outerRight {
  width: 30px;
  height: 50px;
  overflow: hidden;
  transform: rotate(180deg)
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
  min-width: 360px;
  justify-content: space-between;
}
.page {
  padding: 0 10px;
  color: silver;
  cursor: pointer;
}
</style>