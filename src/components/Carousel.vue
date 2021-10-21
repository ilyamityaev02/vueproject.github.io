<template>
  <div
    class="workers-carousel"
    v-bind:class="{
      first: firstSliderItems,
      second: secondSliderItems
    }"
    v-if="firstSliderItems"
  >
    <CarouselItem v-for="s in firstSliderItems" :key="s" :s="s" />
  </div>
  <div
    class="workers-carousel"
    v-bind:class="{
      first: firstSliderItems,
      second: secondSliderItems
    }"
    v-else
  >
    <CarouselItem v-for="s in secondSliderItems" :key="s" :s="s" />
  </div>
</template>
<script>
import CarouselItem from "./CarouselItem.vue";
export default {
  props: ["firstSliderItems", "secondSliderItems"],
  components: {
    CarouselItem
  },
  data() {
    return {
      workersSettings: {
        dots: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: "10%",
        slide: "div",
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    };
  },
  mounted() {
    $(".workers-carousel.first")
      .not(".slick-initialized")
      .slick(this.workersSettings);
    $(".workers-carousel.second")
      .not(".slick-initialized")
      .slick(this.workersSettings);
  },
  methods: {}
};
</script>

<style></style>
