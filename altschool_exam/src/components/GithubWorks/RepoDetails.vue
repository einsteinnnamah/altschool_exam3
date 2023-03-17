<template>
  <div>
    <h2>{{ repo.name }}</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>{{ repo.description }}</p>
      <p>Language: {{ repo.language }}</p>
      <p>Created at: {{ repo.created_at }}</p>
    </div>
    <button @click="goBack">Back to Repos</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RepoDetails",
  props: ["id"],
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
