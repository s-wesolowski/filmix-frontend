import { useDispatch, useSelector } from "react-redux";
import "./Poster.scss";

const Poster = (props) => {
  const dispatch = useDispatch();

  const { size = "medium", margin = "5px" } = props;

  const posterID = props?.media?.poster_path;

  const title = props?.media.title || props?.media.name;

  const sizes = {
    small: "w92",
    medium: "w154",
    normal: "w342",
    big: "w342",
    large: "w500",
  };

  const img_size = sizes[size] || sizes.normal;

  const { collection } = useSelector((state) => state.collection);
  const { user } = useSelector((state) => state.userData);

  const inCollection = (
    user && user.user_id && collection[user.user_id]
      ? collection[user.user_id]
      : []
  ).filter((item) => item.data.id === props.media.id);

  const handleOpenDetails = () => {
    dispatch({
      type: "OPEN_MEDIADETAILS",
      mediaType: props?.media.title ? "movie" : "tv",
      mediaId: props?.media.id,
    });
  };

  const addToCollection = (e) => {
    e.stopPropagation();
    dispatch({
      type: "COLLECTION_ADD",
      userId: user.user_id,
      item: {
        type: props?.media.title ? "movie" : "tv",
        data: props?.media,
      },
    });
  };

  const removeFromCollection = (e) => {
    e.stopPropagation();
    dispatch({
      type: "COLLECTION_REMOVE",
      userId: user.user_id,
      item: {
        type: props?.media.title ? "movie" : "tv",
        data: props?.media,
      },
    });
  };

  const path = posterID
    ? `https://image.tmdb.org/t/p/${img_size}/${posterID}`
    : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

  return (
    <div
      className={"poster " + size}
      style={{ margin: margin }}
      onClick={handleOpenDetails}
    >
      {user && (
        <>
          {inCollection.length > 0 ? (
            <button
              className="collection-button"
              onClick={removeFromCollection}
            >
              -
            </button>
          ) : (
            <button className="collection-button" onClick={addToCollection}>
              +
            </button>
          )}
        </>
      )}
      <img src={path} alt="" />
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Poster;
