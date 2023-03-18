<template>
  <div class="bg-background_img h-screen w-screen text-white">
    <div class="flex items-center justify-center flex-col">
      <img :src="require('../assets/sad-face-emoji.gif')" />
      <h1 class="font-bold text-[64px]">404 Page</h1>
      <p class="text-[20px]">This page does not exist</p>
      <button
        class="text-white mt-[20px] bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] px-[14px] py-[10px] rounded-full"
        @click="goBack"
      >
        Go back to main page
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFOund",
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
