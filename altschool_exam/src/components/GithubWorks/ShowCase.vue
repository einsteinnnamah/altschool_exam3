<template>
  <div class="w-[1440px] mx-auto flex flex-col items-center">
    <h1
      class="font-extrabold text-[22px] md:text-[32px] py-[10px] bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] inline-block text-transparent bg-clip-text"
    >
      Github Works
    </h1>
    <div class="flex flex-col">
      <li class="text-white" v-for="repo in displayedRepos" :key="repo.id">
        <router-link :to="'/repos/' + repo.id">{{ repo.name }}</router-link>
      </li>
    </div>
    <div class="text-white" v-if="loading">Loading...</div>
    <div class="text-white">
      <button @click="previousPage" :disabled="page <= 1">Previous</button>
      <span v-for="pageNumber in pageNumbers" :key="pageNumber">
        <button
          @click="setPage(pageNumber)"
          :class="{ active: pageNumber === page }"
        >
          {{ pageNumber }}
        </button>
      </span>
      <button @click="nextPage" :disabled="page >= pageCount">Next</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repos: [],
      loading: true,
      page: 1,
      pageSize: 5,
    };
  },
  computed: {
    displayedRepos() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      if (this.repos.length > 0) {
        return this.repos.slice(start, end);
      } else {
        return [];
      }
    },
    pageCount() {
      return Math.ceil(this.repos.length / this.pageSize);
    },

    pageNumbers() {
      const pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  mounted() {
    setTimeout(() => {
      axios
        .get("https://api.github.com/users/einsteinnnamah/repos")
        .then((response) => {
          this.repos = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  },
  methods: {
    setPage(pageNumber) {
      this.page = pageNumber;
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
    },
  },
};
</script>
