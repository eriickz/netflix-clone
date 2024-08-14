export type SliderType = "ranking" | "category"

export type MovieShow = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_name: string
  original_title?: string
  origin_country?: string[]
  overview: string
  popularity: number
  poster_path: string
  release_date?: string
  first_air_date?: string
  title?: string
  name?: string
  video?: boolean
  vote_average: number
  vote_count: number
}

export type Genre = {
  id: number,
  name: string
}

export type MovieImage = {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export type HeroContent = {
  logo: string
  overview: string
  backdrop: string
}
