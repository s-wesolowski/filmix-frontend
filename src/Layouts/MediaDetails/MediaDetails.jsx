import "./MediaDetails.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import MovieDetails from "./MovieDetails";
import TvSeriesDetails from "./TvSeriesDetails";

const MediaDetails = (type, id) => {
  const { mediaDetailsActive, mediaType, mediaId } = useSelector(
    (state) => state.mediaDetails
  );

  const dispatch = useDispatch();

  const [mediaDetailsData, setMediaDetailsData] = useState(null);

  useEffect(() => {
    const getMediaDetails = async () => {
      if (mediaDetailsActive) {
        setMediaDetailsData(null);
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
            setMediaDetailsData(res.data);
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

    setMediaDetailsData(null);
  };

  return (
    <div>
      {mediaDetailsActive &&
        (mediaType === "movie" ? (
          <MovieDetails handleClose={handleClose} data={mediaDetailsData} />
        ) : (
          <TvSeriesDetails handleClose={handleClose} data={mediaDetailsData} />
        ))}
    </div>
  );
};

export default MediaDetails;
