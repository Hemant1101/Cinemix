import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import useFetch from '../../../hooks/useFetch'

const HeroBanner = () => {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const {data, loading } = useFetch("/movie/upcoming")

  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)
  }, [data])

  const searchQueryHandler = (e) => {
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="herBanner">
      <div className="wrapper">
        <div className="heroBannerConent">
          <span className="title">Welcom.</span>
          <span className="subtitle">
            Millions of movies, TV show and more to discover.
            Explore now.
          </span>
          <div className="searchInput">
            <input type="text" placeholder="Search for a movie or tv show...." 
            onChange={(e)=>setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner