import { img_460, unavailable } from "../../config/config";
import "./SingleContent.css";
const SingleContent = ({
    id,
    poster,
    title,
    date,
    vote_average,
}) => {
    return (
        <div>
            <img className="poster" src={poster ? `${img_460}/${id}/header.jpg` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="sunTitle">{date}</span>
        </div>
    );
}

export default SingleContent;