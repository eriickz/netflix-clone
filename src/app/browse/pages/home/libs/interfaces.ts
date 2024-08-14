import type { Genre, MovieShow, SliderType, MovieImage } from "./types"

export interface MovieShowRequest {
  page: number,
  results: MovieShow[]
}

export interface MovieImagesRequest {
  id: number
  backdrops: MovieImage[]
  logos: MovieImage[]
  posters: MovieImage[]
}

export interface MoviesGenresRequest {
  genres: Genre[]
}

export interface MoviesShowsCollections {
  type: "movies" | "shows"
  topRated: MovieShow[]
  nextWatch: MovieShow[]
}

export interface GenresCollections {
  movies: Genre[],
  shows: Genre[]
}

export interface VideosAndGenresRequest {
  videos: MoviesShowsCollections[]
  genres: GenresCollections
}

// ---> PROPS

export interface SliderItemProps {
  position: number
  type: SliderType 
  content: MovieShow
  genres?: Genre[] 
}

export interface SliderProps {
  showVignette?: boolean
  sliderType: SliderType
  data?: MovieShow[]
  genres?: Genre[] 
}

export interface SliderTypeItemProps {
  position: number
  content: MovieShow
  genres?: Genre[] 
}
