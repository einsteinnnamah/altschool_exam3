<template>
  <div class="text-white flex flex-col items-center justify-center">
    <h1
      style="font-family: 'Bespoke Stencil'"
      class="font-extrabold mt-[76px] mb-[40px] text-[22px] md:text-[48px] py-[10px] bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] inline-block text-transparent bg-clip-text"
    >
      Featuring
    </h1>
    <div class="hidden xl:flex gap-[15px]">
      <img class="w-[450px]" src="../assets/pics1.png" />
      <img class="w-[450px]" src="../assets/pics2.png" />
      <img class="w-[450px]" src="../assets/pics3.png" />
    </div>
    <div class="glide max-w-full md:max-w-xl xl:hidden">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide"><img src="../assets/pics1.png" /></li>
          <li class="glide__slide"><img src="../assets/pics2.png" /></li>
          <li class="glide__slide"><img src="../assets/pics3.png" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";

export default {
  name: "FeaturingView",
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      perView: 1,
      autoplay: 5000,
      hoverpause: true,
    }).mount();
  },
};
</script>

<style>
@import "@glidejs/glide/dist/css/glide.core.min.css";
@import "@glidejs/glide/dist/css/glide.theme.min.css";
</style>
