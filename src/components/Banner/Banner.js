import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../constants/Axios";
import { imageUrl, trending } from "../../constants/url";
import banner from "../../assets/banner-3.jpg";
import movielogo from "../../assets/movie-logo.webp";

function Banner() {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        axios
        .get( `${trending}` )
        .then((response) => {
            setMovies(response.data.results[1]);
            console.log("============response============", response);
            })
        .catch((err) =>{
        console.log(err);
        });
    }, []);

    console.log("============movies===============", movies);
    return(
        
        <div className="Banner" style={{backgroundImage:`url(${movies.length !== 0 ? imageUrl +movies.backdrop_path : ""})`}}>
            <div>
                <div className="content">
                    <h1 className="title">{movies.length !== 0 ? movies.title : ""}</h1>
                    <div className="description">
                        <h4 style={{color:"#fff"}}>{movies.length !== 0 ? movies.overview : ""}</h4>
                    </div>
                    <div className="bannerBtn">
                        <button className="play_button"><i className="fa fa-play"></i>Play</button>
                        <button className="more_button"><i className="fa fa-exclamation"></i>More Info</button>
                    </div>
                </div>
            </div>
            <div className="fade-bottom">
            </div>
        </div>
        

        
    )
}

export default Banner

