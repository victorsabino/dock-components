<template>
  <div class="displayInformationRoot" :style="`width: ${width} !important`">
    <div class="displayInformationTitle"> {{title}} <span class="subtitle"> {{subtitle}} </span> </div>
    <div class="displayInformation" v-for="(information, index) in informations" :key="index">
      {{information}}
    </div>
    <div class="displayInformationFooter">
      {{footerInfo}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      },
      subtitle: {
        type: String,
        default: ""
      },
      width: {
        type: String,
        default: ""
      },
      informations: {
        type: Array,
        default: () => []
      },
      footerInfo: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
  .displayInformationRoot {
    display: flex;
    flex-direction: column;
  }
  .subtitle {
    font-weight: 600;
    font-size: 12px;
  }
  .displayInformationTitle {
    font-weight: 600;
    color: #10434F;
    letter-spacing: 0.15px;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    text-align: left;
  }
  .displayInformation {
    color: #00000099;
    letter-spacing: 0.15px;
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    text-align: left;
    min-height: 20px;
  }
  .displayInformationFooter {
    color: #10434F;
    letter-spacing: 0.4px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    opacity: 0.5;
    text-align: left;

  }
</style>