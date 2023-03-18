<template>
  <div class="bg-white h-[719px]">
    <div class="w-[1440px] mx-auto flex flex-col items-center">
      <h1
        class="font-extrabold mt-[76px] text-[22px] md:text-[48px] py-[10px] bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5] inline-block text-transparent bg-clip-text"
      >
        Github Works
      </h1>
      <div
        class="flex mt-[38px] flex-wrap items-center justify-center gap-x-[20px] gap-y-[50px]"
      >
        <div
          class="text-white bg-[#1e1e1e] rounded-[10px] w-full sm:w-[300px] md:w-[45%] lg:w-[45%] xl:w-[45%] mb-4 sm:mb-0 md:mr-4 lg:mr-4 xl:mr-4"
          v-for="repo in displayedRepos"
          :key="repo.id"
        >
          <div class="w-[300px] h-[120px] p-3 gap-x-[100px]">
            <div>
              <span class="text-[#AAAAAA]">Repo Name</span>
              <p>{{ repo.name }}</p>
            </div>
            <div class="flex justify-between mt-[8px]">
              <p><span class="text-[#AAAAAA]">Repo Id: </span>{{ repo.id }}</p>
              <router-link class="" :to="'/repos/' + repo.id">
                View More
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-[#1e1e1e]" v-if="loading">Loading...</div>
      <div class="text-[#1e1e1e]">
        <button @click="previousPage" :disabled="page <= 1" v-if="page > 1">
          Previous
        </button>
        <span v-for="pageNumber in pageNumbers" :key="pageNumber">
          <button
            @click="setPage(pageNumber)"
            :class="{ active: pageNumber === page }"
          >
            {{ pageNumber }}
          </button>
        </span>
        <button
          @click="nextPage"
          :disabled="page >= pageCount"
          v-if="page < pageCount"
        >
          Next
        </button>
      </div>
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
      pageSize: 8,
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
