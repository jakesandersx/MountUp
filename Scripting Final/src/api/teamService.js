import instance from "./core";

export const getTeamsBySport = (sport) => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post('/teams/teamsbysport', {sport});
        
        if(response){
            resolve(response.data);
        } else{
            resolve(undefined);
        }
    })
}