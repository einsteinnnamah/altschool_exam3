<template>
  <div>
    <h2>{{ repo.name }}</h2>
    <p>{{ repo.description }}</p>
    <p>Language: {{ repo.language }}</p>
    <p>Created at: {{ repo.created_at }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repo: {},
    };
  },
  mounted() {
    const repoId = this.$route.params.id;
    axios
      .get(`https://api.github.com/repositories/${repoId}`)
      .then((response) => {
        this.repo = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
