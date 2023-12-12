import '../css/Article.css';
import { useParams } from 'react-router-dom';
import { useArticleById } from '../hooks/articleHook';
import image from '../images/article1.jpg';

function Article() {
    const { articleId } = useParams();
    const { data } = useArticleById(articleId);;

    return(
        <div className="article-container">
            {data ? 
                <>
                    <div className='article-header'>
                        <img src={image} />
                        <p>{data.author} | {data.posted}</p>
                        <h1>{data.title}</h1>
                    </div>
                    <p className='article-body'>{data.body}</p>
                </>
            : null}
            
        </div>
    );
}

export default Article;