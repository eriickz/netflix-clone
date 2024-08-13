import type { Genre, MovieShow, SliderType } from "./types"

export interface MovieShowRequest {
  page: number,
  results: MovieShow[]
}

export interface MoviesGenresRequest {
  genres: Genre[]
}

export interface MoviesShowsCollections {
  type: "movies" | "shows",
  topRated: MovieShow[],
  nextWatch: MovieShow[]
}

export interface GenresCollections {
  movies: Genre[],
  shows: Genre[]
}

export interface VideosAndGenresRequest {
  videos: MoviesShowsCollections[]
  genres: GenresCollections[]
}

// ---> PROPS

export interface SliderItemProps {
  position: number
  type: SliderType 
  content: MovieShow
}

export interface SliderProps {
  showVignette?: boolean
  sliderType: SliderType
  data?: MovieShow[]
}

export interface SliderTypeItemProps {
  position?: number
  content: MovieShow
}
