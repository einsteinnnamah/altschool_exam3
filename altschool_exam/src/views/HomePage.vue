<template>
  <div class="bg-background_img h-screen w-screen">
    <HeaderView />
    <Body />
    <ShowCase />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import Body from "@/components/Body.vue";
import ShowCase from "@/components/GithubWorks/ShowCase.vue";
export default {
  name: "HomePage",
  components: {
    HeaderView,
    Body,
    ShowCase,
  },
};
</script>
