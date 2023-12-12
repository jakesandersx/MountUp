import instance from "./core";

export const getArticlesBySport = (sport) => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post('/articles/getbysport', {sport});
        
        if(response){
            resolve(response.data);
        } else{
            resolve(undefined);
        }
    })
}

export const getLatestArticleBySport = (sport) => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post('/articles/getonebysport', {sport});
        
        if(response){
            resolve(response.data);
        } else{
            resolve(undefined);
        }
    })
}

export const getArticleById = (articleId) => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post('/articles/getbyid', {articleId});
        
        if(response){
            resolve(response.data);
        } else{
            resolve(undefined);
        }
    })
}