import ky from "ky";
import { GenresCollections, MovieShowRequest, MoviesGenresRequest, MoviesShowsCollections, VideosAndGenresRequest } from "./libs/interfaces";

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  }
})

export async function getMovies(): Promise<MovieShowRequest> {
  return await api.get("discover/movie?include_video=true").json()
}

export async function getTvShows(): Promise<MovieShowRequest> {
  return await api.get("discover/tv").json()
}

export async function getMoviesGenres(): Promise<MoviesGenresRequest> {
  return await api.get("genre/movie/list").json()
}

export async function getShowGenres(): Promise<MoviesGenresRequest> {
  return await api.get("genre/tv/list").json()
}

export async function getVideosAndGenres(): Promise<VideosAndGenresRequest> {
  return await Promise.all([getMovies(), getTvShows(), getMoviesGenres(), getShowGenres()]).then(responses => {
    let videos: MoviesShowsCollections[] = []
    let genres: GenresCollections[] = []

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

    genres.push({
      movies: responses[2].genres,
      shows: responses[3].genres
    })

    return {
      videos,
      genres
    }
  })
}
