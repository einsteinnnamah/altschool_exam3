<template>
  <div class="bg-background_img h-max w-screen">
    <HeaderView />
    <Body />
    <Ribbon />
    <ShowCase />
    <Featuring />
    <Footer />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import Body from "@/components/Body.vue";
import ShowCase from "@/components/GithubWorks/ShowCase.vue";
import Ribbon from "@/components/Ribbon.vue";
import Featuring from "@/components/Featuring.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomePage",
  components: {
    HeaderView,
    Body,
    Ribbon,
    ShowCase,
    Featuring,
    Footer,
  },
};
</script>
