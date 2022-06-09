import "./style.scss";

import React, { useEffect, useState } from "react";
import EmbedTrailer from "./EmbedTrailer";

import {} from "react-redux";

const MovieDetails = (props) => {
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

  return (
    <>
      <div className={"MediaDetails " + (!closeAnimation ? "active" : "")}>
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
                    props.data.title
                  ) : (
                    <div className="lazyLoading"></div>
                  )}
                </h2>

                <div className="info">
                  {props.data ? (
                    <>
                      <div className="year">
                        <span className="material-icon">event</span>
                        {props.data.release_date
                          ? props.data.release_date.slice(0, 4)
                          : null}
                      </div>
                      <div className="runtime">
                        <span className="material-icon">schedule</span>
                        {Math.floor(props.data.runtime / 60)}h{" "}
                        {props.data.runtime % 60 !== 0
                          ? (props.data.runtime % 60) + "m"
                          : null}
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

                <div className="buttons"></div>
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
                  alt={props.data.title}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
