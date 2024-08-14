import type { Genre, MovieShow, SliderType, MovieVideo, MovieImage } from "./types"

export interface MovieShowRequest {
  page: number,
  results: MovieShow[]
}

export interface MovieVideosRequest {
  page: number
  results: MovieVideo[]
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
  genres: GenresCollections[]
}

export interface MovieVideosAndImagesRequest {
  images: MovieImagesRequest,
  videos: MovieVideosRequest
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
  position: number
  content: MovieShow
}
