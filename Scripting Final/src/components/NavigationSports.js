import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavigationSports({visible}){
    const sportsList = useSelector((state) => state.teams.sports);

    return(
        <>
            {visible ? 
                <div className='nav-sports-grid'>
                    <div className='nav-sports-grid-section'>
                        <h2 className='nav-sports-grid-header'>Men's</h2>
                        <ul>
                            {sportsList.filter((sport) => sport.gender ? sport.gender.includes("Men") : false).map((sport) => (
                                <li className='nav-sports-grid-sport'>
                                    <Link className="nav-sports-grid-link" to={`/sports/${sport.id}`}>{sport.name}</Link>
                                    <div className='nav-sports-grid-quick-links'>
                                        <Link to={`/news/${sport.id}`}>News</Link>
                                        <Link className="nav-links-standings" to={`/standings/${sport.id}`}>Standings</Link>
                                        <Link to={`/schedule`}>Schedule</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className='nav-sports-grid-section'>
                        <h2 className='nav-sports-grid-header'>Women's</h2>
                        <ul>
                            {sportsList.filter((sport) => sport.gender ? sport.gender.includes("Women") : false).map((sport) => (
                                <li className='nav-sports-grid-sport'>
                                    <Link className="nav-sports-grid-link" to={`/sports/${sport.id}`}>{sport.name}</Link>
                                    <div className='nav-sports-grid-quick-links'>
                                        <Link to={`/news/${sport.id}`}>News</Link>
                                        <Link className="nav-links-standings" to={`/standings/${sport.id}`}>Standings</Link>
                                        <Link to='/schedule'>Schedule</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>  
                </div> : null}
        </>
                
    )
}

export default NavigationSports;