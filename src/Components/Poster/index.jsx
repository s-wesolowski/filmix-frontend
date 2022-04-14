import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Poster.scss"

const Poster = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { size = "medium", margin = "5px" } = props;

    const posterID =  props?.media?.poster_path;

    const title = props?.media.title || props?.media.name;

    const sizes = {
        small: "w92",
        medium: "w154",
        normal: "w342",
        big: "w342",
        large: "w500",
    }
console.log(props.media)

    const img_size = sizes[size] || sizes.normal;

    const handleOpenDetails = () => {
        navigate(window.location.pathname + `?type=${props.media.title ? "movie" : "tv"}&id=` + props.media.id);
        if (props.media.title) {
            dispatch({
                type: "TOGGLE_MOVIEDETAILS",
                visibility: "visible"
            })
        } else {
            dispatch({
                type: "TOGGLE_TVSERIESDETAILS",
                visibility: "visible"
            })
        }
    }
    
    const path = posterID
        ? `https://image.tmdb.org/t/p/${ img_size }/${ posterID }`
        : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
    
    return (
        <div className={"poster " + size} style={{margin: margin}} onClick={handleOpenDetails}>
            <img src={path} alt="" />
            <div className="title">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Poster;