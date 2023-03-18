<template>
  <div class="bg-background_img h-max w-screen">
    <HeaderView />
    <Body />
    <Ribbon />
    <ShowCase />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import Body from "@/components/Body.vue";
import ShowCase from "@/components/GithubWorks/ShowCase.vue";
import Ribbon from "@/components/Ribbon.vue";
export default {
  name: "HomePage",
  components: {
    HeaderView,
    Body,
    Ribbon,
    ShowCase,
  },
};
</script>
