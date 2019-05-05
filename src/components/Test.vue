<template>
  <div
    id="example-1"
    @clicked="test"
  >
    boop
    <button @click="$emit('clicked')">
      Add 1
    </button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0,
    }
  },
  methods: {
    test() {
      alert()
    },
  },
}
</script>
