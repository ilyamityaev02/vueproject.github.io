<template>
  <div class="reviews-carousel">
    <ReviewsItem v-for="r in reviewsSliderItems" :key="r" :r="r" />
  </div>
</template>

<script>
import ReviewsItem from "./ReviewsItem.vue";
export default {
  props: ["reviewsSliderItems"],
  components: { ReviewsItem },
  data() {
    return {
      settings: {
        dots: false,
        dotsClass: ".reviews-nav",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendArrows: ".reviews-nav",
        prevArrow:
          '<button id="prev" type="button" class="slick-prev slick-arrow"></button>',
        nextArrow:
          '<button id="next" type="button" class="slick-next slick-arrow"></button>'
      }
    };
  },
  mounted() {
    $(".reviews-carousel").on("init", function(event, slick) {
      $(".reviews-counter").append(
        `<span class="reviews-counter-active">01</span>/0${slick.slideCount} `
      );
    });
    $(".reviews-carousel").slick(this.settings);
    $(".reviews-carousel").on("afterChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      $(".reviews-counter-active").html(`0${currentSlide + 1}`);
    });
  }
};
</script>

<style></style>
