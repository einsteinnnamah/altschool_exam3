<template>
  <div class="bg-background_img h-screen w-screen">
    <HeaderView />
    <Body />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import Body from "@/components/Body.vue";
export default {
  name: "HomePage",
  components: {
    HeaderView,
    Body,
  },
};
</script>
