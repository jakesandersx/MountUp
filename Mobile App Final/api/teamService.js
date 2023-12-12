import instance from "./core";

//Pull Roster data
export const getRosterBySport = () => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post('/teams/getroster', { teamId: "65773f02543db000ea102573"});

        if(response){
            resolve(response.data);
        } else {
            resolve(undefined);
        }
    })
}

//Pull Scheduled Games

//Pull Stats
