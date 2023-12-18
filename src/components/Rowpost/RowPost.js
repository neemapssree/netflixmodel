import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../constants/Axios";
import { api_key } from "../../constants/Apikey";
import { imageUrl } from "../../constants/url";
import { trending, originals, action, horror } from "../../constants/url";
import YouTube from 'react-youtube';
import { videoApi } from "../../constants/url";


const RowPost = (props) => {
    
    const [rowPost, setrowPost] = useState([]);
    const [vid, setID] = useState();
    useEffect(()=>{
        axios
        .get(props.url)
        .then((response) => {
            console.log("============results===============", response);
            setrowPost(response.data.results);
            })
        .catch((err) =>{
        console.log(err);
        });
    }, []);

    const handleTrailer = (movie) => {        
        axios
            .get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api_key}&language=en-US`
            ) .then((response) =>{
                console.log(response.data.results[0].key);
                setID(response.data.results[0].key);
            }) .catch((error) => {
                console.log(error);
            })
    };
    const opts = {
        height: '350',
        width: '500',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };
    
    return(
        
        <div className="RowPost">
            <h2>{props.title}</h2>
            <div className="posters-container">
                <div className="posters" id="posters">
            { rowPost.map((movie) => { 
                return(
                    <img className={props.isSmall ? "small-poster" : "poster"} 
                    src={`${imageUrl + movie.backdrop_path}`}
                    onClick={()=> handleTrailer(movie)}
                    />  
                    );           
                })}
                </div>             
            </div>
            {vid && <YouTube videoId={vid} opts={opts} />}
        </div>  
    );

};


export default RowPost