<template>
  <div
    class="pt-[41px] flex justify-center md:justify-between xl:w-[1440px] items-center mx-auto px-[16px] py-[16px] md:px-[24px] md:py-[24px]"
  >
    <div class="text-white text-[28px] font-semibold">Einstein Nnamah</div>
    <div class="hidden sm:flex gap-[16px] items-center">
      <img
        class="px-5 rounded-[30px] py-5 bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5]"
        :src="require('../assets/Socials/Twitter.png')"
      />
      <img
        class="px-5 rounded-[30px] py-5 bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5]"
        :src="require('../assets/Socials/LInkedin.png')"
      />
      <img
        class="px-5 rounded-[30px] py-5 bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5]"
        :src="require('../assets/Socials/Medium.png')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
