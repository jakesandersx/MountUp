import { useEffect, useState } from "react";
import { getTeamsBySport } from "../api/teamService";

export const useTeamsBySport = (sport) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const getTeams = async () => {
            const teamData = await getTeamsBySport(sport);

            if(teamData){
                setTeams(teamData);
            }
        }
        getTeams();
    }, [sport]);

    return {data: teams};
}