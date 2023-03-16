<template>
  <div
    class="xl:w-[1440px] mx-auto flex flex-col px-[16px] py-[16px] md:px-[24px] md:py-[24px]"
  >
    <div class="bg-white flex items-center justify-center rounded-full">
      <span
        class="px-[20px] font-extrabold text-[22px] md:text-[32px] py-[10px] bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] inline-block text-transparent bg-clip-text"
      >
        <span class="bg-none text-white">👋</span> Hello
      </span>
    </div>
    <!-- <div class="xl:relative xl:items-start">
      <div
        style="font-family: 'Bespoke Stencil'"
        class="bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] inline-block text-transparent bg-clip-text lg:text-[87px] md:text-[68px] text-[36px] xl:w-[979px] font-extrabold"
      >
        When Design Meets Development
      </div>
      <div class="xl:absolute top-[60%] left-[60%]">
        <div
          class="md:w-[435px] w-[260px] h-[233px] rounded-[30px] md:h-[389px] bg-[#C9BFF8] relative rotate-[8.24deg]"
        >      <img
        class="absolute top-[30px] right-[25px] md:w-[435px] md:h-[389px] w-[260px] h-[233px]"
        :src="require('../assets/pics.png')"
        alt=""
      /></div>
      </div>
    </div> -->
    <div>
      <p class="text-white md:">
        Einstein Nnamah is a product designer with front-end development skills,
        able to create visually appealing designs that solve real-world problems
        and bring them to life with seamless and responsive user experiences. By
        collaborating between design and development teams, Einstein bridges the
        gap to ensure the final product meets both aesthetic and technical
        requirements, resulting in designs that not only look great but also
        function seamlessly.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Body",
};
</script>
