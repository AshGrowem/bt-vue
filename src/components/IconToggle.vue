<template>
  <i
    class="material-icons"
    @click="toggle"
  > {{ currentIcon }} </i>
</template>

<script>
export default {
  name: "IconToggle",
  props: ['iconone', 'icontwo'],
  data() {
    return {
      currentIcon: this.iconone,
    };
  },
  methods: {
    toggle() {
      if (this.currentIcon == this.iconone) {
        this.currentIcon = this.icontwo;
      } else {
        this.currentIcon = this.iconone
      }
    }
  }
};
</script>
