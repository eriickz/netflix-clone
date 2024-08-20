import ky from "ky";
import { MovieImagesRequest, MovieShowRequest, MoviesGenresRequest, MoviesShowsCollections, VideosAndGenresRequest } from "./libs/interfaces";

const api = ky.create({
  prefixUrl: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  }
})

async function getMovies(): Promise<MovieShowRequest> {
  return await api.get("discover/movie?include_video=true").json()
}

async function getTvShows(): Promise<MovieShowRequest> {
  return await api.get("discover/tv").json()
}

async function getMoviesGenres(): Promise<MoviesGenresRequest> {
  return await api.get("genre/movie/list").json()
}

async function getShowGenres(): Promise<MoviesGenresRequest> {
  return await api.get("genre/tv/list").json()
}

export async function getVideosAndGenres(): Promise<VideosAndGenresRequest> {
  return await Promise.all([getMovies(), getTvShows(), getMoviesGenres(), getShowGenres()]).then(responses => {
    const videos: MoviesShowsCollections[] = []

    videos.push({
      type: "movies",
      topRated: responses[0].results.slice(0, 10),
      nextWatch: responses[0].results.slice(10, 20),
    })

    videos.push({
      type: "shows",
      topRated: responses[1].results.slice(0, 10),
      nextWatch: responses[1].results.slice(10, 20),
    })

    return {
      videos,
      genres: {
        movies: responses[2].genres,
        shows: responses[3].genres
      }
    }
  })
}

export async function getMovieImages(movieId: number): Promise<MovieImagesRequest> {
  return await api.get(`movie/${movieId}/images?language=en`).json()
}
