import axios from 'axios'
export default class FilmeApi {
    async buscarTodosOsFilmesPorGenero(genero) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3d6ff8fd9d66e9265c8452f1b4cad17b&language=pt_br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genero}&with_watch_monetization_types=flatrate`);
        return data.results;
    };
}