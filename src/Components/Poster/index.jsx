import "./Poster.scss"

const Poster = (props) => {

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


    const img_size = sizes[size] || sizes.normal;
    
    const path = posterID
        ? `https://image.tmdb.org/t/p/${ img_size }/${ posterID }`
        : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
    
    return (
        <div className={"poster " + size} style={{margin: margin}}>
            <img src={path} alt="" />
            <div className="title">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Poster;