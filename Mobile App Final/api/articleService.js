import instance from "./core";

export const getAllArticles = () => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.get("/articles/all");

        if(response){
            resolve(response.data);
        } else {
            resolve(undefined);
        }
    });
}

export const getArticleById = (_id) => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post('/articles/getbyid', {articleId: _id});

        if(response){
            resolve(response.data);
        } else {
            resolve(undefined);
        }
    })
}