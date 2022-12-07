<script>
import CardSerie from "../components/séries/CardSerie.vue";
import SerieApi from "@/api/series";
const serieApi = new SerieApi();

export default {
  props: ["id"],
  components: { CardSerie },
  data() {
    return {
      series: [],
    };
  },
  async created() {
    this.series = await serieApi.buscarTodosAsSeriesPorGenero(this.id);
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
  },
  watch: {
    async id() {
      this.series = await serieApi.buscarTodosAsSeriesPorGenero(this.id);
    },
  },
};
</script>
<template>
  <div class="row">
    <div class="col mt-14" v-for="serie of series" :key="serie.id">
      <h3>{{ serie.name }}</h3>
      <p class="nota">Nota {{ serie.vote_average }}</p>
      <img :src="getImageUrl(serie.poster_path)" alt="" />
    </div>
  </div>
</template>

<style scooped>
.row{
background-color: rgba(39, 103, 120, 0.285);
}

h3{
  color:white;
  font-size: 30px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 60px;
}

.nota{
  background-color:  rgba(0, 0, 0, 0.285);
  border: 3px   rgb(147, 147, 147) solid;
  border-radius: 1px;
  padding: 12px;
  width: 19%;
  color:  white;
  font-size: 15px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}

</style>
