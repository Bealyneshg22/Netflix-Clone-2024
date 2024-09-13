import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "../../utils/axios"
import requests from '../../utils/requests'
import "./Banner.css"

function Banner() {
    const [movies, setMovies]=useState([]) 
    useEffect(()=>{
        async function fetchData(){
            try{
         const request =await axios.get(requests.fetchNetflixOriginals)
           setMovies(request.data.results[
            Math.floor(Math.random() * request.data.results.length)
           ])
            }catch (error){
              console.log("error",error)
            }
        }
     fetchData()  
    },[])
      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
   console.log(movies)

  return (
    <div className="banner"
      style=
      {{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "non-repeat",
      }}>
        <div className="banner__contents">
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movies?.overview, 150)}</h1>
      </div>
      <div className='banner__fadeBottom'/>
      </div>
  );
    }

export default Banner
