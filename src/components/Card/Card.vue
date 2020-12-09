<template>
  <div :class="`cardRoot ${getClasses()}`" data-testid="card">
    <div class="toggledWrapper" v-if="toggable && isMobile()" @click.stop="toggleCard()">
      <div class="toggleTitle">{{ title }}</div>
      <div>
        <md-icon style="color: #10434f !important">
          {{isToggled() ? 'expand_more' : 'expand_less' }}
        </md-icon>
      </div>
    </div>
    <div v-if="!isToggled()">
      <slot name="card" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggable: {
      default: false,
      type: Boolean,
    },
    title: {
      defalt: "",
      type: String,
    },
  },
  data: function () {
    return {
      toggled: true,
    };
  },
  components: {},
  methods: {
    toggleCard: function () {
      this.toggled = !this.toggled;
    },
    isToggled: function () {
      return this.toggled && this.toggable && this.isMobile();
    },
    isMobile: function () {
      return window.innerWidth < 900;
    },
    getClasses: function () {
      if (this.isToggled()) {
        return "toggled";
      }
      return "";
    },
  },
  mounted () {
    if (this.toggable) {
      window.addEventListener("resize", () => {
        this.$forceUpdate()
      });
    }
  },
  destroyed () {
    if (this.toggable) {
      window.removeEventListener("resize");
    }
  }
};
</script>

<style scoped>
.cardRoot {
  min-height: 100px;
  min-width: 300px;
  width: fit-content;
  height: auto;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px 4px 4px 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 10px;
}
.toggledWrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.toggleTitle {
  color: #10434f;
  font-size: 20px;
  text-align: left;
  font-weight: 500;
  padding-top: 3px;
}
@media only screen and (max-width: 900px) {
}
.toggled {
  height: auto !important;
  min-height: 50px;
}
</style>
<style>
.toggledWrapper i {
  font-size: 44px !important;
}
</style>