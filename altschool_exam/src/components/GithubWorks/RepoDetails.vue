<template>
  <div class="bg-background_img h-screen w-screen">
    <HeaderView />
    <div
      class="px-[16px] py-[16px] md:px-[24px] md:py-[24px] items-start gap-[497px]"
    >
      <button
        class="text-white bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] px-[14px] py-[10px] rounded-full"
        @click="goBack"
      >
        Back to Repos
      </button>
      <div class="flex flex-col md:items-center items-start justify-center">
        <div class="bg-white text-black w-[300px] md:w-[600px] p-5">
          <h2>{{ repo.name }}</h2>
          <div v-if="loading">Loading...</div>
          <div v-else>
            <p>{{ repo.description }}</p>
            <p class="flex justify-between">
              <span class="text-[#787676]">Language: </span>{{ repo.language }}
            </p>
            <p class="flex justify-between">
              <span class="text-[#787676]">Created at: </span>{{ repo.created_at }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderView from "../HeaderView.vue";
export default {
  name: "RepoDetails",
  props: ["id"],
  components: {
    HeaderView,
  },
  data() {
    return {
      repo: {},
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      axios
        .get(`https://api.github.com/repositories/${this.$route.params.id}`)
        .then((response) => {
          this.repo = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toDateString();
    },
    viewDetails() {
      console.log("viewDetails", this.repo.id);
      this.$router.push({ name: "RepoDetail", params: { id: this.repo.id } });
    },
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
