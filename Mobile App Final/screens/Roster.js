import { FlatList } from "react-native-gesture-handler";
import AthleteCard from "../components/AthleteCard";
import RosterHeader from "../components/RosterHeader";
import { useState } from "react";
import { useRosterBySport } from "../hooks/teamHook";

function Roster({route}){
    const sport = route.params;
    
    const { data } = useRosterBySport();

    const [sortedData, setSortedData] = useState(data);
    const [refreshList, setRefreshList] = useState(false);

    function onSort(sort){
        switch(sort){
            case "number":
                setSortedData(data.sort((a, b) => a.number-b.number));
                setRefreshList(prevRefreshList => !prevRefreshList);
                break;
            //Need to pull coaches from database
            case "coaches":
                setRefreshList(prevRefreshList => !prevRefreshList);
                break;
            case "name":
                setSortedData(data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
                setRefreshList(prevRefreshList => !prevRefreshList);
                break;
            case "position":
                setSortedData(data.sort((a, b) => a.position.toLowerCase().localeCompare(b.position.toLowerCase())));
                setRefreshList(prevRefreshList => !prevRefreshList);
                break;
            default:
                console.log('error');
                break;
        }
    }

    return(
        <FlatList data={sortedData} extraData={refreshList} keyExtractor={ item => item.number} renderItem={({item}) => (
            <AthleteCard name={item.name} position={item.position} number={item.number} from={item.from}/>
        )} ListHeaderComponent={() => (
            <RosterHeader onSort={onSort}/>
        )}/>
    );
}

export default Roster;
