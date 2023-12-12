import { useEffect, useState } from "react";
import { getAllArticles, getArticleById } from "../api/articleService";

export const useAllArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const articleData = await getAllArticles();

            if(articleData){
                setArticles(articleData);
            }
        }
        getArticles();
    }, []);

    return {data: articles};
}

export const useSingleArticle = (_id) => {
    const [article, setArticle] = useState({
        title: "",
        author: "",
        body: "",
        links: [],
    });

    useEffect(() => {
        const getSingleArticle = async () => {
            const articleData = await getArticleById(_id);

            if(articleData){
                setArticle(articleData);
            }
        }
        getSingleArticle();
    }, []);

    return {data: article};
}