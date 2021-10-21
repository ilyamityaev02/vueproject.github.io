<template>
  <div class="review-item">
    <div class="review-logo">
      <img v-bind:src="require(`../assets/img/${r.img}`)" class="img-fluid" />
    </div>
    <div class="review-desc">
      <p>
        {{ r.text }}
      </p>
    </div>
    <div class="review-author">
      {{ r.author }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    r: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
