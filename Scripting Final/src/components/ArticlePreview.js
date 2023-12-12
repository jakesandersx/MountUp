import { useLatestArticleBySport } from "../hooks/articleHook";
import { Link } from "react-router-dom";

function ArticlePreview({ sportId }){
    const { data } = useLatestArticleBySport(sportId);
    console.log(data);

    return(
        <>
            {data ? 
                <div className='sport-hero'>
                <div className='sport-hero-img'></div>
                    <div className='sport-hero-text'>
                        <h2>{data.posted}</h2>
                        <Link to={`../articles/${data._id}`}>{data.title}</Link>
                    </div>
                </div> : null}
        </>
        
    )
}

export default ArticlePreview;