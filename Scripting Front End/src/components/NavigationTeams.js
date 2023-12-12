import { Link } from "react-router-dom";

function NavigationTeams({visible}){
    return (
        <>
            {visible ? 
                <ul className="team-list">
                    <li className="team-link"><Link to="https://athletics.anderson.edu/landing/index">Anderson</Link></li>
                    <li className="team-link"><Link to="https://blufftonbeavers.com/landing/index">Bluffton</Link></li>
                    <li className="team-link"><Link to="https://www.defianceathletics.com/landing/index">Defiance</Link></li>
                    <li className="team-link"><Link to="https://goearlham.com/">Earlham</Link></li>
                    <li className="team-link"><Link to="https://franklingrizzlies.com/">Franklin</Link></li>
                    <li className="team-link"><Link to="https://athletics.hanover.edu/">Hanover</Link></li>
                    <li className="team-link"><Link to="https://msjlions.com">Mount St. Joseph</Link></li>
                    <li className="team-link"><Link to="https://muspartans.com/">Manchester</Link></li>
                    <li className="team-link"><Link to="https://athletics.rose-hulman.edu/">Rose-Hulman</Link></li>
                    <li className="team-link"><Link to="https://transysports.com/">Transylvania</Link></li>
                    {/* Add links for other teams here */}
                </ul> : null}
        </>
    )
}

export default NavigationTeams;