import { useEffect, useState } from "react";
import { getArticleById, getArticlesBySport, getLatestArticleBySport } from "../api/articleService";

export const useArticlesBySport = (sport) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const articleData = await getArticlesBySport(sport);

            if(articleData){
                setArticles(articleData);
            }
        }
        getArticles();
    }, [sport]);

    return {data: articles};
}

export const useLatestArticleBySport = (sport) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const getArticle = async () => {
            const articleData = await getLatestArticleBySport(sport);

            if(articleData){
                setArticle(articleData);
            }
        }
        getArticle();
    }, [sport]);

    return {data: article};
}

export const useArticleById = (articleId) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const getArticle = async () => {
            const articleData = await getArticleById(articleId);

            if(articleData){
                setArticle(articleData);
            }
        }
        getArticle();
    }, [articleId]);

    return {data: article};
}

