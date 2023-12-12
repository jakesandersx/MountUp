import { useState } from 'react';
import '../css/Sport.css';
import { useTeamsBySport } from '../hooks/teamHook';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArticlePreview from '../components/ArticlePreview';

function Sport(){
    const { sportId } = useParams();
    const sportList = useSelector((state) => state.teams.sports);

    const [standingsSport, setStandingsSport] = useState(sportList.find((sport) => {
        return sport.id === sportId;
    }));
    const { data } = useTeamsBySport(standingsSport.id);

    
    const [selectedSport, setSelectedSport] = useState(`${standingsSport.gender} ${standingsSport.name}`);
    
    const handleSelect = (e) => {
        setSelectedSport(e.target.value);
        setStandingsSport(sportList.find(sport => sport.name.includes(e.target.value.split(" ")[1]) && sport.gender.includes(e.target.value.split(" ")[0])));
    };
    
    return(
        <div className='sport-container'>
            <ArticlePreview sportId={sportId}/>

            {/* Standings Table */}
            <div className="sport-standings-container">
                <div className='sport-standings-header'>
                    <h3>Standings</h3>
                    <select value={selectedSport} onChange={handleSelect}>
                        {sportList.map((sport) => (
                            <option key={sport.id}>{sport.gender} {sport.name}</option>
                        ))}
                    </select>
                </div>
                
                <table className="sport-table">
                    <thead>
                        <tr>
                            <th className= 'sport-table-left' colSpan={2}>School</th>
                            <th className='sport-table-center'>Conference</th>
                            <th className='sport-table-center'>Overall</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(school => (
                            <tr key={school.school}>
                                <td className= 'sport-table-left' colSpan={2}><div className="sport-table-logo-container" ><img src={school.image}/>{school.school}</div></td>
                                <td className='sport-table-center'>{school.conferenceRecord}</td>
                                <td className='sport-table-center'>{school.overallRecord}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button>View Full Standings</button>
            </div>
        </div>
    )
}

export default Sport;