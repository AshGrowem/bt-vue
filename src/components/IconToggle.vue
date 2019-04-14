<template>
  <i
    class="material-icons"
    @click="toggle"
  > {{ currentIcon }} </i>
</template>

<script>
export default {
  name: "IconToggle",
  props: {
    iconone: {
      type: String,
      default: "iconone"
    },
  },
  data() {
    return {
      currentIcon: this.iconone
    }
  },
  methods: {
    toggle() {
      if (this.currentIcon == this.iconone) {
        this.currentIcon = this.icontwo
      } else {
        this.currentIcon = this.iconone
      }
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>

