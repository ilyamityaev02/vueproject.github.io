<template>
  <div class="workers-carousel-wrapper">
    <div class="workers-carousel-item first">
      <img
        v-bind:src="require(`../assets/img/${s.img}`)"
        alt=""
        class="img-fluid"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    s: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
