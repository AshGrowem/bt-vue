<template>
  <i
    class="material-icons"
    @click="toggle"
  > {{ currentIcon }} </i>
</template>

<script>
export default {
  name: 'IconToggle',
  props: {
    iconone: {
      type: String,
      default: 'IconToggle_Missing_IconFontName',
      required: true,
    },
    icontwo: {
      type: String,
      default: 'IconToggle_Missing_IconFontName',
      required: true,
    },
  },
  data() {
    return {
      currentIcon: this.iconone,
    }
  },
  methods: {
    toggle() {
      if (this.currentIcon == this.iconone) {
        this.currentIcon = this.icontwo
      } else {
        this.currentIcon = this.iconone
      }
    },
  },
}
</script>

<style lang="scss" scoped>
i {
  user-select: none;
}
</style>

