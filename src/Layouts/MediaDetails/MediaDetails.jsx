import "./MediaDetails.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import EmbedTrailer from "./EmbedTrailer";

const MediaDetails = (type, id) => {
  const { mediaDetailsActive, mediaType, mediaId } = useSelector(
    (state) => state.mediaDetails
  );
  const [mediaInfo, setMediaInfo] = useState(null);
  const dispatch = useDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";
  const backdropUrl = "https://image.tmdb.org/t/p/w780/";

  useEffect(() => {
    const getMediaDetails = async () => {
      if (mediaDetailsActive) {
        setMediaInfo(null);
        await axios
          .get(
            `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pl-PL&append_to_response=videos`
          )
          .then(async (res) => {
            if (res.data.videos.results.length === 0) {
              const englishTrailers = await axios.get(
                `https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos?api_key=341e1383cc1f8f4613ec7c2c06b80273`
              );
              res.data.videos = englishTrailers.data;
            }
            setMediaInfo(res.data);
          });
      }
    };

    getMediaDetails();
  }, [mediaId, mediaDetailsActive, mediaType]);

  const handleClose = () => {
    dispatch({
      type: "CLOSE_MEDIADETAILS",
      mediaType: type,
      mediaId: id,
    });
    setTimeout(() => {
      setMediaInfo(null);
    }, 250);
  };

  return (
    <>
      <div className={"MediaDetails " + (mediaDetailsActive && "active")}>
        <div className="background" onClick={handleClose}></div>
        <div className="content">
          <div className="content-main">
            <button className="closeButton" onClick={handleClose}>
              <span className="material-icon">close</span>
            </button>
            <div className="overview">
              <div className="images">
                {mediaInfo ? (
                  <img
                    className="poster"
                    src={posterUrl + mediaInfo.poster_path}
                    alt={mediaInfo.poster_path}
                  />
                ) : (
                  <div className="lazyLoading"></div>
                )}
              </div>
              <div className="rightSide">
                <h2 className="title">
                  {mediaInfo ? (
                    mediaInfo.title
                  ) : (
                    <div className="lazyLoading"></div>
                  )}
                </h2>

                <div className="info">
                  {mediaInfo ? (
                    <>
                      <div className="year">
                        <span className="material-icon">event</span>
                        {mediaInfo.release_date
                          ? mediaInfo.release_date.slice(0, 4)
                          : null}
                      </div>
                      <div className="runtime">
                        <span className="material-icon">schedule</span>
                        {Math.floor(mediaInfo.runtime / 60)}h{" "}
                        {mediaInfo.runtime % 60 !== 0
                          ? (mediaInfo.runtime % 60) + "m"
                          : null}
                      </div>
                      <div
                        className="vote_average"
                        style={{ "--rating": mediaInfo.vote_average }}
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
                  {mediaInfo ? (
                    mediaInfo.overview
                  ) : (
                    <div className="lazyLoading"></div>
                  )}
                </div>

                <div className="buttons">
                  {mediaInfo ? (
                    <button id="playButton">
                      <span className="material-icon">play_circle</span>Play
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
            {/* {
                        movie && movie.videos.results.length > 0 && movie.videos.results[0].type === "Trailer" 
                        ? <EmbedTrailer videoId={movie.videos.results[0].key}/> 
                        : movie && movie.backdrop_path
                            ? <div className="backdrop"><img src={backdropUrl + movie.backdrop_path} alt={movie.title}/></div>
                            : null
                        }  */}

            {mediaInfo &&
            mediaInfo.videos.results.length > 0 &&
            mediaInfo.videos.results[0].type === "Trailer" ? (
              <EmbedTrailer videoId={mediaInfo.videos.results[0].key} />
            ) : null}
            {mediaInfo && mediaInfo.backdrop_path ? (
              <div
                className={
                  "backdrop " +
                  (mediaInfo &&
                  mediaInfo.videos.results.length > 0 &&
                  mediaInfo.videos.results[0].type === "Trailer"
                    ? null
                    : "active")
                }
              >
                <img
                  src={backdropUrl + mediaInfo.backdrop_path}
                  alt={mediaInfo.title}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaDetails;
