<template>
  <div class="logo">
    <div class="logoWrapper">
      <img :src="logoImg" />
    </div>
  </div>
</template>

<script>
import LogoFull from "@/assets/logoFull.svg";
export default {
  props: {
    marginLeft: {
      default: null,
      type: String
    },
    logoImg: {
      defaultt: LogoFull
    }
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: -100px;
  left: 0;
  display: flex;
  text-align: left;
  font-family: Raleway, sans-serif;
  font-size: 28px;
  letter-spacing: 0;
  color: #f4f1eb;
  margin-top: 7px;
  display: flex;
  height: 50px;
  line-height: 30px;
  width: 100%;
  pointer-events: none;
}

.logo img {
  margin-top: -25px;
  margin-right: 20px;
  margin-left: 20px;
  height: 80px;
  width: auto;
}
.logoWrapper {
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.logo span {
  margin-top: 50px;
}
</style>
