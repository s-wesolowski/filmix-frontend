import "./style.scss";
import "./TvSeriesDetails.scss";

import React, { useEffect, useState } from "react";
import axios from "axios";
import EmbedTrailer from "./EmbedTrailer";

const TvSeriesDetails = (props) => {
  const [selectedSeason, setSelectedSeason] = useState({
    episodes: [],
  });

  const [extendedInfo, setExtendedInfo] = useState(false);

  const [seasonIndicator, setSeasonIndicator] = useState(0);

  const posterUrl = "https://image.tmdb.org/t/p/w500/";
  const backdropUrl = "https://image.tmdb.org/t/p/w780/";

  const [closeAnimation, setCloseAnimation] = useState(true);

  const handleClose = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      props.handleClose();
    }, 250);
  };

  useEffect(() => {
    setCloseAnimation(false);
  }, []);

  const handleExtendInfo = () => {
    if (extendedInfo) {
      setExtendedInfo(false);
    } else {
      setExtendedInfo(true);
      handleShowEpisodes(1);
    }
  };

  const handleShowEpisodes = async (season_number) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${props.data.id}/season/${season_number}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pl-PL`
      )
      .then(async (res) => {
        setSelectedSeason(res.data);
        if (seasonIndicator === 0) {
          setSeasonIndicator(season_number - 1);
        } else {
          setSeasonIndicator(season_number);
        }
      });
  };

  const getSeasonName = (number) => {
    switch (number) {
      case 1:
        return "sezon";
      case 2:
        return "sezony";
      case 3:
        return "sezony";
      case 4:
        return "sezony";
      default:
        return "sezonów";
    }
  };

  const getTvSeriesYears = () => {
    const seasonsArray = props.data.seasons.filter(
      (season) => season.air_date !== null
    );

    const firstSeason = seasonsArray[0].air_date.slice(0, -6);
    const lastSeason = seasonsArray[seasonsArray.length - 1].air_date.slice(
      0,
      -6
    );

    if (firstSeason === lastSeason) {
      return firstSeason;
    } else {
      return firstSeason + " - " + lastSeason;
    }
  };

  return (
    <>
      <div
        className={
          "MediaDetails tvSeriesDetails " +
          (!closeAnimation ? "active" : "") +
          (extendedInfo ? " extended" : "")
        }
      >
        <div className="background" onClick={handleClose}></div>
        <div className="content">
          <div className="content-main">
            <button className="closeButton" onClick={handleClose}>
              <span className="material-icon">close</span>
            </button>
            <div className="overview">
              <div className="images">
                {props.data ? (
                  <img
                    className="poster"
                    src={posterUrl + props.data.poster_path}
                    alt={props.data.poster_path}
                  />
                ) : (
                  <div className="lazyLoading"></div>
                )}
              </div>
              <div className="rightSide">
                <h2 className="title">
                  {props.data ? (
                    props.data.name
                  ) : (
                    <div className="lazyLoading"></div>
                  )}
                </h2>

                <div className="info">
                  {props.data ? (
                    <>
                      <div className="year">
                        <span className="material-icon">event</span>
                        {getTvSeriesYears()}
                      </div>
                      <div className="runtime">
                        <span className="material-icon">schedule</span>
                        {props.data.seasons.length +
                          " " +
                          getSeasonName(props.data.seasons.length)}
                      </div>
                      <div
                        className="vote_average"
                        style={{ "--rating": props.data.vote_average }}
                      >
                        <span className="material-icon">
                          star star star star star
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="lazyLoading"></div>
                  )}
                </div>

                <div className="description">
                  {props.data ? (
                    props.data.overview
                  ) : (
                    <div className="lazyLoading"></div>
                  )}
                </div>

                <div className="buttons">
                  {props.data ? (
                    <button id="playButton" onClick={handleExtendInfo}>
                      Odcinki
                      <span className="material-icon">
                        {extendedInfo ? "expand_less" : "expand_more"}
                      </span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
            {props.data &&
            props.data.videos.results.length > 0 &&
            props.data.videos.results[0].type === "Trailer" ? (
              <EmbedTrailer videoId={props.data.videos.results[0].key} />
            ) : null}
            {props.data && props.data.backdrop_path ? (
              <div
                className={
                  "backdrop " +
                  (props.data &&
                  props.data.videos.results.length > 0 &&
                  props.data.videos.results[0].type === "Trailer"
                    ? null
                    : "active")
                }
              >
                <img
                  src={backdropUrl + props.data.backdrop_path}
                  alt={props.data.name}
                />
              </div>
            ) : null}
          </div>

          <div className="content-extended">
            <div className="seasons">
              {props.data &&
                props.data.seasons.map((season) => (
                  <div
                    className="season"
                    key={season.season_number}
                    onClick={() => handleShowEpisodes(season.season_number)}
                  >
                    {season.poster_path ? (
                      <img
                        src={posterUrl + season.poster_path}
                        alt={season.name}
                      />
                    ) : (
                      <span className="material-icon">image</span>
                    )}
                    <p className="name">{season.name}</p>
                  </div>
                ))}
              <div
                className="indicator"
                style={{ "--step": seasonIndicator }}
              ></div>
            </div>
            <div className="episodes">
              {selectedSeason &&
                selectedSeason.episodes.map((episode) => (
                  <div className={"episode"} key={episode.episode_number}>
                    <span className="rate">
                      <span className="material-icon">star</span>
                      {episode.vote_average.toFixed(1)}
                    </span>
                    <div className="image">
                      {episode.still_path ? (
                        <img
                          src={posterUrl + episode.still_path}
                          alt={episode.name}
                        />
                      ) : (
                        <span className="material-icon">image</span>
                      )}
                    </div>
                    <div className="center">
                      <div className="title">
                        {episode.episode_number + ". " + episode.name}
                      </div>
                      <div className="overview">{episode.overview}</div>
                    </div>

                    <div className="buttons">
                      <button className="watched">
                        <span className="material-icon">done</span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvSeriesDetails;
