import { useState, useEffect } from "react";
import { getRosterBySport } from "../api/teamService";

//Pull Roster data
export const useRosterBySport = (sport) => {
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        const getRoster = async () => {
            const rosterData = await getRosterBySport(sport);

            if(rosterData){
                setRoster(rosterData);
            }
        }
        getRoster();
    }, []);

    return {data: roster};
}

//Pull Scheduled Games

//Pull Stats
