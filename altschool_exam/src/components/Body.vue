<template>
  <div
    class="xl:w-[1440px] mx-auto flex flex-col px-[16px] py-[16px] md:px-[24px] md:py-[24px]"
  >
    <div class="flex items-center justify-center">
      <span class="bg-white flex items-center justify-center rounded-full">
        <span
          class="px-[20px] font-extrabold text-[22px] md:text-[32px] py-[10px] bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] inline-block text-transparent bg-clip-text"
        >
          <span class="bg-none text-white">👋</span> Hello
        </span>
      </span>
    </div>
    <div
      class="xl:relative mt-[24px] flex flex-col items-center justify-center xl:justify-start xl:flex-row xl:items-end"
    >
      <div
        style="font-family: 'Bespoke Stencil'"
        class="bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] inline-block text-transparent bg-clip-text lg:text-[87px] md:text-[68px] text-[36px] xl:w-[979px] font-extrabold"
      >
        When Design Meets Development
      </div>
      <div class="xl:absolute right-[30px] top-[80px]">
        <img
          class="md:w-max md:h-max w-[260px] h-[233px]"
          :src="require('../assets/Sidepics.png')"
          alt=""
        />
      </div>
    </div>
    <div>
      <p class="text-[#AAAAAA] text-[24px] md:w-[714px] mt-[24px]">
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
