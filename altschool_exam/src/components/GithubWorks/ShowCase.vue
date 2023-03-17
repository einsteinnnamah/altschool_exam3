<template>
  <div>
    <h1>Repository List</h1>
    <ul>
      <li class="text-white" v-for="repo in repos" :key="repo.id">
        <router-link :to="{ name: 'RepoDetails', params: { id: repo.id } }">
          {{ repo.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repos: [],
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/einsteinnnamah/repos")
      .then((response) => {
        this.repos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
