<script>
import CardMovie from "../components/filmes/CardMovie.vue";
import FilmeApi from "@/api/filmes";
const filmeApi = new FilmeApi();

export default {
  props: ["id"],
  components: { CardMovie },
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    this.movies = await filmeApi.buscarTodosOsFilmesPorGenero(this.id);
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
  },
  watch: {
    async id() {
      this.movies = await filmeApi.buscarTodosOsFilmesPorGenero(this.id);
    },
  },
};
</script>
<template>
  <!-- <div class="container"> -->
  <div class="row">
    <div class="col mt-14" v-for="movie of movies" :key="movie.id">
      <h3>{{ movie.title }}</h3>
      <p class="nota">Notas {{ movie.vote_average }}</p>
      <img :src="getImageUrl(movie.poster_path)" alt="" />
    </div>
  </div>
  <!-- </div> -->
</template>

<style scooped>
.row{
background-color: rgb(56, 55, 55);
}

h3{
  color:rgb(49, 49, 49);
  font-size: 30px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 60px;
}

.nota{
  background-color:  rgba(0, 0, 0, 0.285);
  border: 3px  rgb(147, 147, 147) solid;
  border-radius: 1px;
  padding: 12px;
  width: 19%;
  color: white;
  font-size: 13px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}
</style>
