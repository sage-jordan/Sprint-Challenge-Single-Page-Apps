import React, { useState, useEffect } from "react";
import axios from 'axios';
import EpisodesCard from './EpisodesCard';

export default function EpisodesList() {
    // TODO: Add useState to track data from useEffect
  
    const [episodes, setEpisodes] = useState([]);
  
    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios.get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
        //   console.log(res.data.results);
          setEpisodes(res.data.results);
        })
        .catch(err => console.log(err));
  
    }, []);
    // console.log(episodes);
    return (
      <section className="episode-list grid-view">
        {episodes.map((episode) => {
            console.log(episode)
            return (
                <EpisodesCard key={episode.id} episode={episode} />
            )
        })}
      </section>
    );
  }