<template>
  <div class="drawer-wrapper" id="drawer-wrapper">
    <md-button class="md-icon-button" id="menuButton" @click="toggleDrawer" @mouseenter="actionHover">
      <img 
        :src="logo" 
        v-if="logo" 
        style="font-size: 40px !important; color: #4eb9b1 !important; position: absolute; top: 0px"
      />
      <div class="links-preview">
        <div v-for="(link, index) in links" :key="link+index" @click="link.action">
          <img alt="svg icon" :src="link.icon" v-if="link.img" class="svgFilter drawer-icon" />
          <md-icon v-else style="color: #4EB9B1 !important">{{ link.icon }}</md-icon>
        </div>
        
      </div>
    </md-button>
    <md-drawer
      :md-active.sync="showNavigation"
      class="drawer_background drawer_drawer"
    >
      <md-list
        class="drawer_background"
        v-for="(link, index) in links"
        :key="link+index"
      >
        <md-list-item @click="link.action" :class="`${link.subLabel ? 'userName' : ''} drawer-label`">
          <span class="md-list-item-text">{{ link.label }}</span>
          <span class="md-list-item-text" v-if="link.subLabel">{{ link.subLabel }}</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false
    },
    logo: {
      type: String,
      default: null
    },
    links: {
      type: Array,
      default: () => [
        {
          action: () => {},
          label: 'INÍCIO',
          icon: 'home',
        },
        {
          action: () => {},
          label: 'LOGIN',
          icon: 'login',
        }
      ]
    },
  },
  data() {
    return {
      showNavigation: false,
    }
  },
  methods: {
    toggleDrawer(toggle) {
      this.showNavigation = toggle
      this.$emit('isActive', this.showNavigation)
    },
    actionHover() {
      setTimeout(() => {
          this.toggleDrawer(true)
      }, 100)
    },
    actionLeave() {
      this.toggleDrawer(false)
    },
    callback(mutationsList, observer) {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
          const drawerWrapper = document.querySelector('#drawer-wrapper');
          if(drawerWrapper.children.length === 3){
              drawerWrapper.children[2].addEventListener('mouseenter', () => {
                  this.actionLeave()
              })
          }
        }
      })
    }
  },
  mounted () {
    const drawerWrapper = document.querySelector('#drawer-wrapper');
    const observer = new MutationObserver(this.callback)
    const config = { childList: true, subtree: true }
    observer.observe(drawerWrapper, config);
  },
}
</script>

<style scoped>
.drawer-wrapper {
  height: 100%;
  background: #10434F;
  width: 50px;
}
.logoDrawer {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-bottom: 15px;
  margin-top: 10px;
}
.drawer_drawer {
  width: 70%;
  max-width: 200px;
}
.drawer_drawer .md-list-item {
  margin-right: 20px;
}
.svgFilter {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
}
.md-icon-button {
  border-radius: unset !important;
  width: 100% !important;
  min-width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 18px;
  height: 100% !important;
  color: unset !important;
  z-index: 9 !important;
}

.drawer_background {
  background-color: #10434F !important;
}
.md-drawer {
  padding-top: 80px;
  height: 100vh !important;
}

.md-list-item-text {
  color: #4EB9B1 !important;
  font-weight: 600;
  align-items: flex-end !important;
}

.md-drawer .md-list {
  padding: 0 !important;
}
.links-preview {
  margin-top: 61px;
}

.links-preview div{
  height: 40px;
  display: flex;
}

</style>
<style>
.drawer-wrapper .md-overlay {
  height: 100vh;
  width: 100vw;
}
.drawer-wrapper .md-ripple {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: flex-start;
  border-radius: unset !important;
}
.drawer_background .md-list-item button .md-ripple {
  width: 85% !important;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  min-height: 40px !important;
}
.drawer_background .md-list-item button .md-ripple .md-list-item-text {
  align-items: unset !important;
  margin-left: 35px;
}
.drawer-wrapper .md-button-content {
  display: flex;
  min-width: 45px;
  min-height: 45px;
  flex-direction: column;
}
.drawer-wrapper .md-button-content img {
  min-height: 25px!important;
  min-width: 25px!important;
  margin: auto;
}
.drawer-wrapper .userName .md-list-item-content  {
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
}
.drawer-wrapper .userName .md-list-item-content .md-list-item-text:first-child  {
  color: #F4F1EB !important;
  letter-spacing: 0.09px; 
}
.drawer-wrapper .userName .md-list-item-content .md-list-item-text:nth-child(2)  {
  color: #F4F1EB !important;
  font-size: 10px;
  letter-spacing: 0.33px;
}
.drawer .md-overlay {
  height: 100vh !important;
}
</style>
