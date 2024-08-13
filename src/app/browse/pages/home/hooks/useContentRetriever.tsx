import { useState, useEffect } from "react"
import { VideosAndGenresRequest } from "../libs/interfaces"
import { getVideosAndGenres } from "../services"

const useContentRetriever = () => {
  const [collections, setCollections] = useState<VideosAndGenresRequest | undefined>(undefined) 

  useEffect(() => {
    getVideosAndGenres().then(req => { 
      setCollections(req)
    })
  }, [])

  return {
    movies: collections?.videos.find(vid => vid.type === "movies"),
    shows: collections?.videos.find(vid => vid.type === "shows"),
  }
}

export default useContentRetriever
